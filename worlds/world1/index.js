import * as THREE from 'three';
import React from 'react';
import { Link } from 'react-router-dom';
const OrbitControls = require('three-orbit-controls')(THREE);

class World1 extends React.Component {
    constructor(props) {
        super(props)

        this.createScene = this.createScene.bind(this);

        this.Grid = this.Grid.bind(this);
        this.createGrid = this.createGrid.bind(this);
        this.createSea = this.createSea.bind(this);

        this.createParticles = this.createParticles.bind(this);
        this.createLights = this.createLights.bind(this);

        this.Island = this.Island.bind(this);
        this.createIslands = this.createIslands.bind(this);
        this.createWaves = this.createWaves.bind(this);
        this.moveWaves = this.moveWaves.bind(this);

        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.animate = this.animate.bind(this);
        this.renderScene = this.renderScene.bind(this);
        this.windowResize = this.windowResize.bind(this);

        // add object that requires animation
        this.circle;
        this.controls;
        this.waves;
        this.wavesVertex = [];
        this.gridsVertex = [];

        // variables for the base
        this.radius = 160;
        // number of islands
        this.islandNum = 20;
    }

    componentDidMount() {
        this.createScene();
        this.start();
    }

    componentWillUnmount() {
        this.stop();
        this.container.removeChild(this.renderer.domElement);
    }

    createScene() {
        this.WIDTH = window.innerWidth;
        this.HEIGHT = window.innerHeight;

        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.Fog(0xf7d9aa, 100, 1000);
        this.camera = new THREE.PerspectiveCamera(
            60,
            this.WIDTH / this.HEIGHT,
            1,
            10000
        );
        this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        this.renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
        this.renderer.setSize(this.WIDTH, this.HEIGHT);
        this.renderer.shadowMap.enabled = true;

        this.container = document.getElementById('world');
        this.container.appendChild(this.renderer.domElement);

        this.camera.position.set(0, 150, 450);
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.target = new THREE.Vector3(0, 15, 0);
        this.controls.maxPolarAngle = Math.PI / 2;

        // create stuff
        this.createSea();
        this.createGrid();
        this.createIslands(this.islandNum);
        this.createParticles();
        this.createLights();
        this.createWaves();
    }

    Grid() {
        // grid for generating random islands
        // disable createGrid function for production

        const config = {
            height: 160,
            width: 160,
            heightSeg: 20,
            widthSeg: 20,
            color: "black"
        };

        const material = new THREE.LineBasicMaterial({
            color: config.color,
            opacity: 1
        });

        const gridObject = new THREE.Object3D();
        const gridGeo = new THREE.Geometry();
        const stepw = 2 * config.width / config.widthSeg;
        const steph = 2 * config.height / config.heightSeg;

        //width
        for (let i = -config.width; i <= config.width; i += stepw) {
            gridGeo.vertices.push(new THREE.Vector3(-config.height, i, 0));
            gridGeo.vertices.push(new THREE.Vector3(config.height, i, 0));
        }

        //height
        for (let i = -config.height; i <= config.height; i += steph) {
            gridGeo.vertices.push(new THREE.Vector3(i, -config.width, 0));
            gridGeo.vertices.push(new THREE.Vector3(i, config.width, 0));
        }

        const line = new THREE.LineSegments(gridGeo, material);
        gridObject.add(line);

        let prevIndex = null;
        for (let i = 0; i < this.islandNum; i++) {

            let index = Math.floor((Math.random() * gridGeo.vertices.length-1) + 1);

            // prevent overlap
            while(index === prevIndex){
                index = Math.floor((Math.random() * gridGeo.vertices.length-1) + 1);
            }

            this.gridsVertex[i] = gridGeo.vertices[i];
            prevIndex = index;
        }
        return gridObject;
    }

    createGrid() {
        let grids = this.Grid();
        grids.rotation.x = Math.PI / 2;
        this.grids = grids;
        this.scene.add(grids);
    }

    createSea() {
        const seaGeom = new THREE.CylinderGeometry(this.radius, this.radius, 15, 20, 10);
        // seaGeom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));
        const seaMat = new THREE.MeshBasicMaterial({
            color: 0x9ffafa,
            transparent: true,
            opacity: 0.7,
            flatShading: true,
            // wireframe: true
        });
        const dombGeo = new THREE.TetrahedronGeometry(170, 3);
        const dombMat = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.5,
            // flatShading: true,
            // wireframe: true
        });
        const sea = new THREE.Mesh(seaGeom, seaMat);
        const domb = new THREE.Mesh(dombGeo, dombMat);
        sea.position.y = -5;
        sea.receiveShadow = true;
        this.scene.add(sea);
        // this.scene.add(domb);
    }

    // island object
    Island(radTop, radBottom, height, radSeg, heightSeg, color, opacity) {
        const islandGeo = new THREE.CylinderGeometry(radTop, radBottom, height, radSeg, heightSeg);
        const islandMat = new THREE.MeshPhongMaterial({
            color: color,
            transparent: false,
            opacity: opacity,
            flatShading: true
        });
        this.mesh = new THREE.Mesh(islandGeo, islandMat);
    }

    createIslands(number) {
        const islandColors = [0xf7faff, 0xc1ecff, 0xc1c3ff, 0x9397ff, 0x93f5ff];
        const islands = [];

        for (let i = 0, num = 0; i < number; i++) {
            const radTops = Math.round(Math.random() * 10);
            const radBottoms = radTops + Math.round(Math.random() * 10);
            const heights = radBottoms - Math.round(Math.round(Math.random() * 10) * 0.5);
            const radSegs = 10;
            const heightSegs = 10;
            const opacities = (Math.floor(Math.random() * 10) + 7) * 0.1;

            // assign color
            if (num < islandColors.length - 1) {
                num++;
            } else {
                num = 0;
            }

            islands[i] = new this.Island(radTops, radBottoms, heights, radSegs, heightSegs, islandColors[num], opacities);
            islands[i].mesh.receiveShadow = true;
            this.scene.add(islands[i].mesh);
            islands[i].mesh.position.x = this.gridsVertex[i].x;
            islands[i].mesh.position.y = this.gridsVertex[i].z;
            islands[i].mesh.position.z = this.gridsVertex[i].y;
            // console.log(this.gridsVertex[i]);
        }
    }

    createWaves() {
        const waveGeo = new THREE.RingGeometry(0, this.radius, 20, 20, 20);
        const waveMat = new THREE.MeshBasicMaterial({
            color: 0x9ffafa,
            transparent: true,
            opacity: 0.7,
            // flatShading: true,
            side: THREE.DoubleSide,
            depthWrite: false,
            // wireframe: true
        });
        const waves = new THREE.Mesh(waveGeo, waveMat);
        waves.rotation.x = Math.PI / 2;

        let wavesVertex = [];
        let vertexLength = waveGeo.vertices.length;
        for (let i = 0; i < vertexLength; i++) {
            let v = waveGeo.vertices[i];
            wavesVertex.push({
                y: v.y,
                x: v.x,
                z: v.z,
                // a random angle
                ang: Math.random() * Math.PI * 2,
                // a random distance
                amp: 3 + Math.random() * 3,
                // a random speed between 0.016 and 0.048 radians / frame
                speed: 0.008 + Math.random() * 0.008
            });
        }
        this.wavesVertex = wavesVertex;
        this.waves = waves;
        this.scene.add(waves);
    }

    moveWaves() {
        // get the vertices
        let verts = this.waves.geometry.vertices;
        let l = verts.length;

        for (let i = 0; i < l; i++) {
            let v = verts[i];

            // get the data associated to it
            let vprops = this.wavesVertex[i];

            // update the position of the vertex
            v.x = vprops.x + Math.cos(vprops.ang) * vprops.amp;
            v.z = vprops.z + Math.sin(vprops.ang) * vprops.amp;

            // increment the angle for the next frame
            vprops.ang += vprops.speed;

        }
        this.waves.geometry.verticesNeedUpdate = true;
        this.waves.rotation.z += .005;
    }

    createParticles() {
        const circle = new THREE.Object3D();
        const geom = new THREE.TetrahedronGeometry(30, 1);
        const mat = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            flatShading: true
        });

        const particle = new THREE.Mesh(geom, mat);
        particle.scale.x = particle.scale.y = particle.scale.z = 0.2;
        particle.position.x = particle.position.y = 0;
        particle.position.z = 50;
        circle.add(particle);
        this.scene.add(circle);
        this.circle = circle;
    }

    createLights() {
        let ambientLight = new THREE.AmbientLight(0x999999);
        this.scene.add(ambientLight);

        let lights = [];
        lights[0] = new THREE.DirectionalLight(0xffffff, 1);
        lights[0].position.set(1, 0, 0);
        lights[1] = new THREE.DirectionalLight(0x46f5fd, 1);
        lights[1].position.set(0.75, 1, 0.5);
        lights[2] = new THREE.DirectionalLight(0x8200C9, 1);
        lights[2].position.set(-0.75, -1, 0.5);
        this.scene.add(lights[0]);
        this.scene.add(lights[1]);
        this.scene.add(lights[2]);
    }

    windowResize() {
        this.HEIGHT = window.innerHeight;
        this.WIDTH = window.innerWidth;
        this.renderer.setSize(this.WIDTH, this.HEIGHT);
        this.camera.aspect = this.WIDTH / this.HEIGHT;
        this.camera.updateProjectionMatrix();
    }

    start() {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate);
        }
    }

    stop() {
        cancelAnimationFrame(this.frameId);
    }

    animate() {
        this.circle.rotation.x += 0.01;
        this.circle.rotation.y += 0.02;
        this.circle.rotation.z += 0.03;

        this.controls.update();
        this.moveWaves();
        this.renderScene();
        this.frameId = window.requestAnimationFrame(this.animate);
    }

    renderScene() {
        this.renderer.render(this.scene, this.camera);
    }

    render() {
        window.addEventListener('resize', this.windowResize, false);
        return (
            <div id="world">
                <p><Link to="/">back to the landing page</Link></p>
            </div>
        )
    }
}

export default World1;
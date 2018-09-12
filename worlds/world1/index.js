import * as THREE from 'three';
import React from 'react';
import { Link } from 'react-router-dom';

class World1 extends React.Component {
    constructor(props) {
        super(props)

        this.createScene = this.createScene.bind(this);
        this.createSea = this.createSea.bind(this);
        this.createParticles = this.createParticles.bind(this);
        this.createLights = this.createLights.bind(this);
        this.Island = this.Island.bind(this);
        this.createIslands = this.createIslands.bind(this);

        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.animate = this.animate.bind(this);
        this.renderScene = this.renderScene.bind(this);
        this.windowResize = this.windowResize.bind(this);

        // add object that requires animation
        this.circle;
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
        this.scene.fog = new THREE.Fog(0xf7d9aa, 100, 950);
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

        // create stuff
        this.createSea();
        this.createIslands(20);
        this.createParticles();
        this.createLights();
    }

    createSea() {
        const seaGeom = new THREE.CylinderGeometry(160,160,15,20,10);
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
            // transparent: true,
            // opacity: opacity,
            flatShading: true
        });
        this.mesh = new THREE.Mesh(islandGeo, islandMat);
    }

    createIslands(number) {
        const islandColors = [0xf7faff, 0xc1ecff, 0xc1c3ff, 0x9397ff, 0x93f5ff];
        const islands = [];

        for (let i = 0, num = 0; i <= number; i ++){
            const radTops = Math.round(Math.random() * 10);
            const radBottoms = radTops + Math.round(Math.random() * 10);
            const heights = radBottoms - Math.round(Math.round(Math.random() * 10) * 0.5);
            const radSegs = 10;
            const heightSegs = 10;
            const opacities = (Math.floor(Math.random() * 10) + 7) * 0.1;

            // assign color
            if (num < islandColors.length-1){
                num ++;
            } else {
                num = 0;
            }

            islands[i] = new this.Island(radTops, radBottoms, heights, radSegs, heightSegs, islandColors[num], opacities);
            islands[i].mesh.receiveShadow = true;
            this.scene.add(islands[i].mesh);
            islands[i].mesh.position.x = (Math.floor(Math.random() * 10) + 1) * 10 * Math.pow((-1), i);
            islands[i].mesh.position.y = Math.random() * 10;
            islands[i].mesh.position.z = Math.random() * 100;
        }
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
        // this.island.mesh.scale.x += 0.1;

        // if (this.island.mesh.scale.y <= 1.5){
        //     this.island.mesh.scale.y += 0.01;
        // }

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
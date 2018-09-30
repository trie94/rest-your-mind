import * as THREE from 'three';
import React from 'react';
import { Link } from 'react-router-dom';
const OrbitControls = require('three-orbit-controls')(THREE);
import * as pondGenerator from './pondGenerator';
import * as greenGenerator from './greenGenerator';
import * as creatureGenerator from './creaturesGenerator';
import * as elementsGenerator from './elementsGenerator';
import * as dat from 'dat.gui';

class World3 extends React.Component {
    constructor(props) {
        super(props)

        this.createScene = this.createScene.bind(this);
        this.createGrid = this.createGrid.bind(this);
        this.createLights = this.createLights.bind(this);
        this.Config = this.Config.bind(this);
        this.addElementsToScene = this.addElementsToScene.bind(this);

        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.animate = this.animate.bind(this);
        this.renderScene = this.renderScene.bind(this);
        this.onWindowResize = this.onWindowResize.bind(this);
        this.onMouseClick = this.onMouseClick.bind(this);
        this.raycast = this.raycast.bind(this);

        // add object that requires animation
        this.controls;

        // for island position
        this.pointVertex = [];

        // variables for the base
        this.radius = 300;
        this.base = greenGenerator.ground(this.radius, this.radius + 10);
        this.subBase = greenGenerator.ground(50, 75);
        this.besidesPond = greenGenerator.ground(25, 40);
        this.besidesPond2 = greenGenerator.ground(5, 10);
        this.besidesPond3 = greenGenerator.ground(3, 5);

        this.creature = creatureGenerator.creatureWithRigs();
        this.helper = creatureGenerator.skeletonHelper(this.creature);

        this.mainTree = greenGenerator.tree(50, 2, 60, 0, 3, 7, 50, 5);
        this.subTree1 = greenGenerator.tree(30, 2, 30, Math.PI / 2, 5, 7, 30, 7);
        this.subTree2 = greenGenerator.tree(40, 2, 55, Math.PI / 3, 4, 9, 40, 6);
        this.pond = pondGenerator.pondBaseObject;
        this.waves = pondGenerator.getWaves();
        this.stones = pondGenerator.stones;
        this.sky = elementsGenerator.sky();
        this.house = elementsGenerator.house();

        // dev gui
        this.dat = new dat.GUI();
        this.config = new this.Config();
        this.colorControl = this.dat.addColor(this.config, 'color');

        // mouse
        this.position = new THREE.Vector3();
        this.mouse = new THREE.Vector2(), this.INTERSECTED;
        this.raycaster = new THREE.Raycaster();
    }

    componentDidMount() {
        this.createScene();
        this.start();
    }

    componentWillUnmount() {
        this.stop();
        this.container.removeChild(this.renderer.domElement);
    }

    Config() {
        // this.color = 0xffa359;
        this.color = 0xffc37f;
    }

    createScene() {
        this.WIDTH = window.innerWidth;
        this.HEIGHT = window.innerHeight;

        this.scene = new THREE.Scene();

        // this.scene.fog = new THREE.Fog(this.config.color, 100, 1200);
        this.camera = new THREE.PerspectiveCamera(
            60,
            this.WIDTH / this.HEIGHT,
            1,
            10000
        );
        this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        this.renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
        this.renderer.setSize(this.WIDTH, this.HEIGHT);

        this.container = document.getElementById('world');
        this.container.appendChild(this.renderer.domElement);

        this.camera.position.set(0, 100, 450);
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.target = new THREE.Vector3(0, 15, 0);
        this.controls.maxPolarAngle = Math.PI / 2;

        // create stuff
        this.createGrid();
        this.createLights();
        this.addElementsToScene();
    }

    createGrid() {
        // grid for generating random islands
        const config = {
            height: 100,
            width: 100,
            heightSeg: 100,
            widthSeg: 100,
            color: "black"
        };

        // set 0 opacity for production
        const material = new THREE.LineBasicMaterial({
            color: config.color,
            // transparent: true,
            opacity: 0
        });

        // line
        const gridObject = new THREE.Object3D();
        const gridGeo = new THREE.Geometry();

        // each vertice point
        const pointGeo = new THREE.Geometry();

        const stepw = 2 * config.width / config.widthSeg;
        const steph = 2 * config.height / config.heightSeg;

        // line - width
        for (let i = -config.width; i <= config.width; i += stepw) {
            gridGeo.vertices.push(new THREE.Vector3(-config.height, i, 0));
            gridGeo.vertices.push(new THREE.Vector3(config.height, i, 0));
        }

        // line - height
        for (let i = -config.height; i <= config.height; i += steph) {
            gridGeo.vertices.push(new THREE.Vector3(i, -config.width, 0));
            gridGeo.vertices.push(new THREE.Vector3(i, config.width, 0));
        }

        // draw grid line
        const line = new THREE.LineSegments(gridGeo, material);
        gridObject.add(line);
        gridObject.rotation.x = Math.PI / 2;
        this.scene.add(gridObject);

        // point vertices
        for (let i = -config.width; i <= config.width; i += stepw) {
            for (let j = -config.height; j <= config.height; j += steph) {
                pointGeo.vertices.push(new THREE.Vector3(i, j, 0));
            }
        }

        let prevIndex = null;
        for (let i = 0; i < this.islandNum; i++) {

            let index = Math.floor((Math.random() * pointGeo.vertices.length - 1) + 1);

            // prevent overlap
            while (index === prevIndex) {
                index = Math.floor((Math.random() * pointGeo.vertices.length - 1) + 1);
            }

            this.pointVertex[i] = pointGeo.vertices[index];
            prevIndex = index;
        }
    }

    createLights() {
        let ambientLight = new THREE.AmbientLight(0x333333, 0.5);
        this.scene.add(ambientLight);

        let lights = [];
        lights[0] = new THREE.DirectionalLight(0xfff5d6, 1);
        lights[0].position.set(0, 1, 0);
        lights[1] = new THREE.DirectionalLight(0x598aff, 1);
        lights[1].position.set(-0.75, -1, 0.5);
        lights[2] = new THREE.DirectionalLight(0xc9007b, 0.5);
        lights[2].position.set(0.75, -1, 0.5);

        this.scene.add(lights[0]);
        this.scene.add(lights[1]);
        this.scene.add(lights[2]);
    }

    addElementsToScene() {

        this.scene.add(this.base);
        this.scene.add(this.besidesPond);
        this.scene.add(this.besidesPond2);
        this.scene.add(this.besidesPond3);
        this.scene.add(this.mainTree);
        this.scene.add(this.subTree1);
        this.scene.add(this.subTree2);
        this.scene.add(this.pond);
        this.scene.add(this.waves);
        this.scene.add(this.creature);
        this.scene.add(this.sky);
        this.scene.add(this.house);
        // this.scene.add(this.helper);

        this.besidesPond.position.set(50, 7, 20);
        this.besidesPond2.position.set(30, 7, 5);
        this.besidesPond3.position.set(20, 4, 5);
        this.mainTree.position.set(70, 30, 0);
        this.subTree1.position.set(30, 20, -70);
        this.subTree2.position.set(-200, 20, -50);
        this.creature.position.set(0, 20, 100);

        this.sky.position.set(0, 350, 0);
        this.house.position.set(-100, 30, -80);
        this.house.rotation.y = Math.PI / 8;
    }

    onWindowResize() {
        this.HEIGHT = window.innerHeight;
        this.WIDTH = window.innerWidth;
        this.renderer.setSize(this.WIDTH, this.HEIGHT);
        this.camera.aspect = this.WIDTH / this.HEIGHT;
        this.camera.updateProjectionMatrix();
    }

    onMouseClick(event) {
        event.preventDefault();
        // get position
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        this.raycast();
    }

    raycast() {
        this.raycaster.setFromCamera(this.mouse, this.camera);
        // just capture the ground
        let intersects = this.raycaster.intersectObject(this.base, true);
        if(intersects.length > 0) {

            // temp
            this.creature.position.x = intersects[0].point.x;
            this.creature.position.z = intersects[0].point.z;

            // get position of the block
            this.position = intersects[0].point;
        }
        this.camera.updateMatrixWorld();
        this.renderScene();
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
        const time = Date.now() * 0.004;
        const angle = Math.sin(time) / 8;

        this.controls.update();
        this.colorControl.onChange((color) => {
            this.config.color = color;
            this.scene.fog.color.set(color);
        });

        pondGenerator.moveWaves();
        this.creature.children[0].rotation.y = (Math.PI * angle) / 4;
        this.creature.children[0].children[0].rotation.z = (Math.PI * angle) / 16;
        this.creature.children[0].children[0].children[0].rotation.z = (Math.PI * angle) / 4;
        this.creature.children[0].children[0].children[0].children[0].rotation.z = (Math.PI * angle) / 4;
        this.creature.children[0].children[0].children[0].children[0].children[0].rotation.z = (Math.PI * angle) / 8;
        this.creature.children[0].children[0].children[0].children[0].children[0].children[0].rotation.z = (Math.PI * angle) / 8;

        this.renderScene();
        this.frameId = window.requestAnimationFrame(this.animate);
    }

    renderScene() {
        this.renderer.render(this.scene, this.camera);
    }

    render() {
        window.addEventListener('resize', this.onWindowResize, false);
        window.addEventListener('click', this.onMouseClick, false);

        return (
            <div id="world">
                <p><Link to="/">back to the landing page</Link></p>
            </div>
        )
    }
}

export default World3;
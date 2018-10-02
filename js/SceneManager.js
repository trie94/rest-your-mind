import * as THREE from 'three';
import Block from './Block';
const OrbitControls = require('three-orbit-controls')(THREE);

export default function SceneManager(canvas) {

    const clock = new THREE.Clock();
    let HEIGHT = window.innerHeight;
    let WIDTH = window.innerWidth;

    const scene = createScene();
    const renderer = createRender();
    const camera = createCamera();
    const controls = createControl();
    // add const static base environment
    const block = new Block();
    const block1 = block.getBlock();

    function createScene() {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color("#d6eac5");

        return scene;
    }

    function createRender() {
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
        renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
        renderer.setSize(WIDTH, HEIGHT);
        renderer.gammaInput = true;
        renderer.gammaOutput = true;

        return renderer;
    }

    function createCamera() {
        const aspectRatio = WIDTH / HEIGHT;
        const fieldOfView = 60;
        const nearPlane = 1;
        const farPlane = 10000;
        const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);

        camera.position.set(0, 200, 500);
        camera.lookAt(new THREE.Vector3());

        return camera;
    }

    function createControl() {
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.target = new THREE.Vector3(0, 15, 0);
        controls.maxPolarAngle = Math.PI / 2;

        return controls;
    }

    this.start = function () {
        console.log("start", block);
        scene.add(block1);
    }

    this.update = function () {
        const elapsedTime = clock.getElapsedTime();

        // for(let i=0; i<sceneSubjects.length; i++)
        // 	sceneSubjects[i].update(elapsedTime);

        renderer.render(scene, camera);
    }

    this.onWindowResize = function () {
        HEIGHT = window.innerHeight;
        WIDTH = window.innerWidth;

        canvas.innerWidth = WIDTH;
        canvas.innerHeight = HEIGHT;

        camera.aspect = WIDTH / HEIGHT;
        camera.updateProjectionMatrix();

        renderer.setSize(WIDTH, HEIGHT);
    }
}
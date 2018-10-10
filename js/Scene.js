import * as THREE from 'three';
import Block from './Block';
import MunyuGenerator from './munyuGenerator';
import { linearGrad } from './background';
import bgm from '../assets/sounds/bgm.wav';
const OrbitControls = require('three-orbit-controls')(THREE);

export default function Scene(canvas) {

    const clock = new THREE.Clock();
    let HEIGHT = window.innerHeight;
    let WIDTH = window.innerWidth;

    // scene subjects
    const light = createLights();
    const scene = createScene();
    const renderer = createRenderer();
    const camera = createCamera();
    const controls = createControl();
    const grad = linearGrad();
    const camHelper = new THREE.CameraHelper(camera);

    // audio
    const listener = new THREE.AudioListener();
    const audioLoader = new THREE.AudioLoader();
    const bgmAudio = new THREE.Audio(listener);

    let sceneObjects = [];
    let camPos = camera.position;

    // add const static base environment
    const block = new Block().getBlock(-20, 0, 0);

    // munyu
    const munyuGenerator = new MunyuGenerator();
    const munyus = munyuGenerator.instantiate();
    const pointVertex = munyuGenerator.getPos();
    const speed = munyuGenerator.getSpeed();
    const color = munyuGenerator.getColor();
    let targetPos = munyuGenerator.targetPos();

    function createScene() {
        const scene = new THREE.Scene();
        return scene;
    }

    function createRenderer() {
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
        renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
        renderer.setSize(WIDTH, HEIGHT);
        renderer.gammaInput = true;
        renderer.gammaOutput = true;
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;

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
        // controls.maxPolarAngle = Math.PI / 2;
        controls.maxDistance = 1000;

        return controls;
    }

    function createLights() {
        const ambientLight = new THREE.AmbientLight(0x333333, 0.5);
        const directionalLight = new THREE.DirectionalLight(0xfff5d6, 1);

        let lights = [];
        lights.push(ambientLight);
        lights.push(directionalLight);

        return lights;
    }

    function loadSound() {
        audioLoader.load(bgm, (buffer) => {
            bgmAudio.setBuffer(buffer);
            bgmAudio.setLoop(true),
                bgmAudio.setVolume(0.3);
            bgmAudio.play();
        });
    }

    function addMunyus() {
        for (let i = 0; i < munyus.length; i++) {
            scene.add(munyus[i].getMunyu(pointVertex[i].x, pointVertex[i].y, pointVertex[i].z, color[i]));
        }
    }

    this.start = function () {
        console.log("start");
        scene.add(grad);
        addMunyus();

        loadSound();
        // camera.add(Munyu1.getListener());
        // camera.add(Munyu2.getListener());
        scene.add(light[0]);
        scene.add(light[1]);
        // scene.add(block);
    }

    this.update = function () {
        const elapsedTime = clock.getElapsedTime();
        camPos = camera.position;

        // idle
        for (let i = 0; i < munyus.length; i++) {
            munyus[i].idle(speed[i]);
            munyus[i].setCameraPos(camPos);
        }
        // munyus[0].move(targetPos[10], 0.01);
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

    this.onMouseClick = function () {
        // Munyu1.playMunyu();
        // Munyu2.playAmazingu();
    }
}
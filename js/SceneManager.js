import * as THREE from 'three';
import Block from './Block';
import Munyu from './Munyu';
import bgm from '../assets/sounds/bgm.wav';
const OrbitControls = require('three-orbit-controls')(THREE);

export default function SceneManager(canvas) {

    const clock = new THREE.Clock();
    let HEIGHT = window.innerHeight;
    let WIDTH = window.innerWidth;

    const light = createLights();
    const scene = createScene();
    const renderer = createRenderer();
    const camera = createCamera();
    const controls = createControl();

    // audio
    const listener = new THREE.AudioListener();
    const audioLoader = new THREE.AudioLoader();
    const bgmAudio = new THREE.Audio(listener);

    // add const static base environment
    const block = new Block().getBlock(-20, 0, 0);

    // munyu
    const Munyu1 = new Munyu();
    const munyu1 = Munyu1.getMunyu(20, 0, 0);
    const Munyu2 = new Munyu();
    const munyu2 = Munyu2.getMunyu(40, 0, 0);

    function createScene() {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color("#d6eac5");

        return scene;
    }

    function createRenderer() {
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

    function createLights(){
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

    this.start = function () {
        console.log("start");
        loadSound();
        camera.add(Munyu1.getListener());
        camera.add(Munyu2.getListener());
        scene.add(light[0]);
        scene.add(light[1]);
        scene.add(block);
        scene.add(munyu1);
        scene.add(munyu2);
    }

    this.update = function () {
        const elapsedTime = clock.getElapsedTime();

        // for(let i=0; i<sceneSubjects.length; i++)
        // 	sceneSubjects[i].update(elapsedTime);

        Munyu1.idle(0.004);
        Munyu2.idle(0.002);
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

    this.onMouseClick = function() {
        Munyu1.playMunyu();
        // Munyu2.playAmazingu();
    }
}
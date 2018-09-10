import * as THREE from 'three';
import React from 'react';
import { Link } from 'react-router-dom';

class World1 extends React.Component {
    constructor(props) {
        super(props)

        this.createScene = this.createScene.bind(this);
        this.createPlane = this.createPlane.bind(this);
        this.createCube = this.createCube.bind(this);
        this.createLights = this.createLights.bind(this);

        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.animate = this.animate.bind(this);
        this.renderScene = this.renderScene.bind(this);
        this.windowResize = this.windowResize.bind(this);

        let WIDTH, HEIGHT, scene, camera, renderer, container;
        let plane, cube;
        let hemisphereLight, shadowLight;
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
        this.renderer.setSize(this.WIDTH, this.HEIGHT);
        this.renderer.shadowMap.enabled = true;

        this.container = document.getElementById('world');
        this.container.appendChild(this.renderer.domElement);

        this.camera.position.set(0, 20, 10);
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));

        // create stuff
        this.createPlane();
        this.createCube();
        this.createLights();
    }

    createPlane() {
        const planeGeo = new THREE.PlaneGeometry(10, 10);
        const planeMat = new THREE.MeshBasicMaterial({ color: 0xffff });
        const plane = new THREE.Mesh(planeGeo, planeMat);
        plane.rotation.x = 180;
        this.scene.add(plane);
        this.plane = plane;
    }

    createCube() {
        const cubeGeo = new THREE.BoxGeometry(1, 1, 1);
        const cubeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const cube = new THREE.Mesh(cubeGeo, cubeMat);
        this.scene.add(cube);
        this.cube = cube;
    }

    createLights() {
        let hemisphereLight = new THREE.HemisphereLight(0xaaaaaa, 0x000000, .9);
        let shadowLight = new THREE.DirectionalLight(0xffffff, .9);

        shadowLight.position.set(150, 350, 350);
        shadowLight.castShadow = true;
        shadowLight.shadow.camera.left = -400;
        shadowLight.shadow.camera.right = 400;
        shadowLight.shadow.camera.top = 400;
        shadowLight.shadow.camera.bottom = -400;
        shadowLight.shadow.camera.near = 1;
        shadowLight.shadow.camera.far = 1000;
        shadowLight.shadow.mapSize.width = 2048;
        shadowLight.shadow.mapSize.height = 2048;
        
        this.scene.add(hemisphereLight);  
        this.scene.add(shadowLight);

        this.hemisphereLight = hemisphereLight;
        this.shadowLight = shadowLight;
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
        this.cube.rotation.x += 0.005;
        this.cube.rotation.y += 0.005;

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
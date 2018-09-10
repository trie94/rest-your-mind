import * as THREE from 'three';
import React from 'react';
import { Link } from 'react-router-dom';

class World1 extends React.Component {
    constructor(props) {
        super(props)

        this.createScene = this.createScene.bind(this);
        this.createPlane = this.createPlane.bind(this);
        this.createCube = this.createIsland.bind(this);
        this.createParticles = this.createParticles.bind(this);
        this.createLights = this.createLights.bind(this);

        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.animate = this.animate.bind(this);
        this.renderScene = this.renderScene.bind(this);
        this.windowResize = this.windowResize.bind(this);

        let WIDTH, HEIGHT, scene, camera, renderer, container;
        let plane, island, circle, particle;
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
            75,
            this.WIDTH / this.HEIGHT,
            1,
            1000
        );
        this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        this.renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
        this.renderer.setSize(this.WIDTH, this.HEIGHT);
        this.renderer.shadowMap.enabled = true;

        this.container = document.getElementById('world');
        this.container.appendChild(this.renderer.domElement);

        this.camera.position.set(0, 20, 10);
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));

        // create stuff
        // this.createPlane();
        this.createIsland();
        // this.createParticles();
        this.createLights();
    }

    createPlane() {
        const planeGeo = new THREE.PlaneGeometry(10, 10);
        const planeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const plane = new THREE.Mesh(planeGeo, planeMat);
        plane.rotation.x = 180;
        this.scene.add(plane);
        this.plane = plane;
    }

    createIsland() {
        const circle = new THREE.Object3D();
        const geom = new THREE.TetrahedronGeometry(30, 1);
        const mat = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            flatShading: true
        });

        const island = new THREE.Mesh(geom, mat);
        island.scale.x = island.scale.y = island.scale.z = 0.2;
        island.position.x = island.position.y = island.position.z = 0;
        circle.add(island);
        this.scene.add(circle);
        this.circle = circle;
    }

    createParticles() {
        const particle = new THREE.Object3D();
        this.scene.add(particle);
        this.particle = particle;
    }

    createLights() {
        let ambientLight = new THREE.AmbientLight(0x999999);
        this.scene.add(ambientLight);

        let lights = [];
        lights[0] = new THREE.DirectionalLight( 0xffffff, 1 );
        lights[0].position.set( 1, 0, 0 );
        lights[1] = new THREE.DirectionalLight( 0x11E8BB, 1 );
        lights[1].position.set( 0.75, 1, 0.5 );
        lights[2] = new THREE.DirectionalLight( 0x8200C9, 1 );
        lights[2].position.set( -0.75, -1, 0.5 );
        this.scene.add( lights[0] );
        this.scene.add( lights[1] );
        this.scene.add( lights[2] );
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
        this.circle.rotation.x += 0.003;
        this.circle.rotation.y += 0.003;

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
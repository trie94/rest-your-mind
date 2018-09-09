import * as THREE from 'three';
import React from 'react';
import { Link } from 'react-router-dom';
// import ReactTHREE from 'react-three';

class World0 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        let scene = new THREE.Scene();
        let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        let renderer = new THREE.WebGLRenderer();
        renderer.setClearColor(0x808000);
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
        let geometry = new THREE.BoxGeometry(1, 1, 1);
        let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        let cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        camera.position.z = 5;
        renderer.render(scene, camera);
    }

    render() {
        return (
            <div>
                World0
            <li><Link to="/">back to the landing page</Link></li>
            </div>
        )
    }
}

export default World0;
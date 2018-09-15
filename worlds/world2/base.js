import * as THREE from 'three';

export function Ground() {
    console.log("create base");

    const groundGeo = new THREE.CylinderGeometry(160, 160, 20, 15);
    const groundMat = new THREE.MeshBasicMaterial({
        color: 0x4f5b20,
        transparent: true,
        opacity: 0.9
    });
    const ground = new THREE.Object3D();
    const groundMesh = new THREE.Mesh(groundGeo, groundMat);

    ground.add(groundMesh);
    return ground;
}
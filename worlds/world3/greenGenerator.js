import * as THREE from 'three';
import groundTexture from '../../assets/groundTexture.png';

export function ground(topR, bottomR) {
    const groundObject = new THREE.Object3D();
    const loader = new THREE.TextureLoader();
    loader.load(groundTexture, (groundTexture) => {
        const groundGeo = new THREE.CylinderGeometry(topR, bottomR, 20, 15);
        const groundMat = new THREE.MeshBasicMaterial({
            flatShading: true,
            map: groundTexture
        });
        const groundMesh = new THREE.Mesh(groundGeo, groundMat);
        groundObject.add(groundMesh);
    });
    return groundObject;
}

export function tree(rad, detail, leavePos, leaveRot, stemUp, stempBottom, stemHeight, stemAngle) {
    const leavesGeo = new THREE.TetrahedronGeometry(rad, detail);
    const leavesMat = new THREE.MeshBasicMaterial({
        color: 0x86aa62,
        flatShading: true
    });
    const leaves = new THREE.Mesh(leavesGeo, leavesMat);
    leaves.position.y = leavePos;
    leaves.rotation.x = leaveRot;

    const stemGeo = new THREE.CylinderGeometry(stemUp, stempBottom, stemHeight, stemAngle);
    const stemMat = new THREE.MeshBasicMaterial({
        color: 0x4c3c27,
        flatShading: true
    });
    const stem = new THREE.Mesh(stemGeo, stemMat);
    const tree = new THREE.Object3D;
    tree.add(leaves);
    tree.add(stem);
    return tree;
}
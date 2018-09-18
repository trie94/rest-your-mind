import * as THREE from 'three';

export function ground(topR, bottomR) {
    console.log("create base");

    const groundGeo = new THREE.CylinderGeometry(topR, bottomR, 20, 15);
    const groundMat = new THREE.MeshPhongMaterial({
        color: 0x3d4f16,
        flatShading: true
    });
    const ground = new THREE.Object3D();
    const groundMesh = new THREE.Mesh(groundGeo, groundMat);

    ground.add(groundMesh);
    return ground;
}

export function tree(rad, detail, leavePos, leaveRot, stemUp, stempBottom, stemHeight, stemAngle){
    console.log("create tree");
    const leavesGeo = new THREE.TetrahedronGeometry(rad, detail);
    const leavesMat = new THREE.MeshPhongMaterial({
        color: 0x2c8e3c,
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
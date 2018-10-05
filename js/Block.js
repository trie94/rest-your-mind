import * as THREE from 'three';

export default function Block() {
    const blockObj = new THREE.Object3D();
    const blockGeo = new THREE.IcosahedronGeometry(10, 0);
    const blockMat = new THREE.MeshBasicMaterial({
        color: 0x6d7391,
        flatShading: true
    });

    const concernMesh = new THREE.Mesh(blockGeo, blockMat);
    blockObj.add(concernMesh);

    this.getBlock = function (x, y, z) {
        blockObj.position.set(x, y, z);
        return blockObj;
    }
}
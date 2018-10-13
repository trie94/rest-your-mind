import * as THREE from 'three';

export default function Environment() {

    const groundGeo = new THREE.CircleGeometry(100, 10);
    const groundMat = new THREE.MeshPhongMaterial({
        color: "black"
    });
    const groundMesh = new THREE.Mesh(groundGeo. groundMat);
    
    this.getGround = function()
    {
        return groundMesh;
    }
}
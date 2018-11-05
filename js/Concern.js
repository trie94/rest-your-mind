import * as THREE from 'three';

export default function Concern() {
    
    const concernGeo = new THREE.SphereGeometry(100, 30, 30);
    const concernMat = new THREE.ShaderMaterial({
        uniforms: {
            color: { type: "c", value: new THREE.Color(0xfbffe0) }
        },
        vertexShader: require('../shaders/clouds.vert'),
        fragmentShader: require('../shaders/clouds.frag'),
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });

    const concernMesh = new THREE.Mesh(concernGeo, concernMat);

    this.getConcern = function () {
        return concernMesh;
    }

    // this.update = function () {
    //     time = Date.now() / 1000 % 120000;
    //     this.outerSphereMat.uniforms.time.value = time;
    // }
}
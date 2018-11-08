import * as THREE from 'three';

export default function Concern() {
    let time;
    const concernObj = new THREE.Object3D();

    const concernGeo = new THREE.SphereGeometry(85, 30, 30);
    this.concernMat = new THREE.ShaderMaterial({
        uniforms: {
            color: { type: "c", value: new THREE.Color(0xfbffe0) },
            rimColor: { type: "c", value: new THREE.Color(0x555a63) },
            scale: { type: "f", value: 10 },
            time: { type: "f", value: 0.0 },
            rimPower: { type: "f", value: 2 }
        },
        vertexShader: require('../shaders/clouds.vert'),
        fragmentShader: require('../shaders/clouds.frag'),
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });
    
    const mainConcernMesh = new THREE.Mesh(concernGeo, this.concernMat);
    concernObj.add(mainConcernMesh);

    const concernGeoLayer = new THREE.SphereGeometry(50, 30, 30);
    this.concernMatLayer = new THREE.ShaderMaterial({
        uniforms: {
            color: { type: "c", value: new THREE.Color(0x999cff) },
            rimColor: { type: "c", value: new THREE.Color(0xfbffe0) },
            scale: { type: "f", value: 0.0 },
            time: { type: "f", value: 0.0 },
            rimPower: { type: "f", value: 10 }
        },
        vertexShader: require('../shaders/clouds.vert'),
        fragmentShader: require('../shaders/clouds.frag'),
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });

    const concernMeshLayer = new THREE.Mesh(concernGeoLayer, this.concernMatLayer);
    concernObj.add(concernMeshLayer);

    const concernGeoLayer2 = new THREE.SphereGeometry(110, 30, 30);
    this.concernMatLayer2 = new THREE.ShaderMaterial({
        uniforms: {
            color: { type: "c", value: new THREE.Color(0x181c23) },
            rimColor: { type: "c", value: new THREE.Color(0x181c23) },
            scale: { type: "f", value: 0.0 },
            time: { type: "f", value: 0.0 },
            rimPower: { type: "f", value: 0.5 }
        },
        vertexShader: require('../shaders/clouds.vert'),
        fragmentShader: require('../shaders/clouds.frag'),
        transparent: true,
        blending: THREE.MultiplyBlending,
        depthWrite: false
    });

    const concernMeshLayer2 = new THREE.Mesh(concernGeoLayer2, this.concernMatLayer2);
    // concernObj.add(concernMeshLayer2);

    this.getConcern = function () {
        return concernObj;
    }

    this.update = function () {
        time = Date.now() / 1000 % 120000;
        this.concernMat.uniforms.time.value = time;
        this.concernMatLayer.uniforms.time.value = time;
        this.concernMatLayer.uniforms.scale.value = time * 0.0001;
    }
}
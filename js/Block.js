import * as THREE from 'three';

export default function Block() {
    let intensity = 1.5;
    const pointLight = new THREE.PointLight(0xfbffe0, intensity);
    // pointLight.shadow.bias = -0.5;

    const geo = new THREE.SphereGeometry(50, 30, 30);
    const mat = new THREE.MeshBasicMaterial({
        color: 0xfbffe0,
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        opacity: 0.7
    });

    const shaderMat = new THREE.ShaderMaterial({
        uniforms: {
            rimColor: { type: "c", value: new THREE.Color(0xfbffe0) }
        },
        vertexShader: require('../shaders/glow.vert'),
        fragmentShader: require('../shaders/glow.frag'),
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
    });

    mat.color.multiplyScalar(intensity);
    const sphere = new THREE.Mesh(geo, shaderMat);
    pointLight.add(sphere);

    const texture = new THREE.CanvasTexture(generateTexture());
    texture.magFilter = THREE.NearestFilter;
    texture.wrapT = THREE.RepeatWrapping;
    texture.wrapS = THREE.RepeatWrapping;
    texture.repeat.set(1, 5);

    const outerSphereGeo = new THREE.SphereGeometry(100, 30, 30);
    const outerSphereMat = new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
        alphaMap: texture,
        alphaTest: 0.5,
        transparent: true,
        opacity: 0.5
    });
    const outerSphere = new THREE.Mesh(outerSphereGeo, outerSphereMat);

    outerSphere.castShadow = true;
    outerSphere.receiveShadow = true;
    pointLight.add(outerSphere);

    function generateTexture() {
        var canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        var context = canvas.getContext('2d');
        context.fillStyle = 'white';
        context.fillRect(0, 100, 128, 28);
        return canvas;
    }

    this.getBlock = function(){
        return pointLight;
    }
}
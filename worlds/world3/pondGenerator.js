import * as THREE from 'three';

export let pondBaseObject = pondBase();
let waves = new THREE.Object3D();
let wavesMesh;
let wavesVertex = [];

function pondBase(){

    const geo = new THREE.CylinderGeometry(70, 100, 10, 20);
    const mat = new THREE.MeshBasicMaterial({
        color: 0x93bcff,
        transparent: true,
        opacity: 0.7
    });

    const baseMesh = new THREE.Mesh(geo, mat);
    const baseObj = new THREE.Object3D();

    baseObj.add(baseMesh);
    baseObj.position.y = 7;

    return baseObj;
}

function pondWaves() {
    console.log("pond wave");

    const waveGeo = new THREE.RingGeometry(0, 70, 20, 20, 10);
    const waveMat = new THREE.MeshBasicMaterial({
        color: 0x93bcff,
        transparent: true,
        opacity: 0.7,
        side: THREE.DoubleSide,
        depthWrite: false,
        // wireframe: true
    });

    const waveMesh = new THREE.Mesh(waveGeo, waveMat);
    const waveObj = new THREE.Object3D();
    waveObj.position.y = 9;
    waveObj.rotation.x = Math.PI / 2;
    waveObj.add(waveMesh);

    let vertex = [];
    let length = waveMesh.geometry.vertices.length;

    for (let i=0; i < length; i++){
        
        let v = waveMesh.geometry.vertices[i];
        vertex.push({
            x: v.x,
            y: v.y,
            z: v.z,
            ang: Math.random() * Math.PI * 2,
            amp: 3 + Math.random() * 2,
            speed: 0.004 + Math.random() * 0.004
        });
    }

    wavesMesh = waveMesh;
    waves = waveObj;
    wavesVertex = vertex.concat();
}

export function getWaves(){
    pondWaves();
    return waves;
}

export function moveWaves(){

    let verts = wavesMesh.geometry.vertices;
    let length = verts.length;

    for (let i=0; i < length; i++){
        let v = verts[i];
        let vprops = wavesVertex[i];
        v.x = vprops.x + Math.cos(vprops.ang) * vprops.amp;
        v.z = vprops.z + Math.sin(vprops.ang) * vprops.amp;
        vprops.ang += vprops.speed;
    }

    wavesMesh.geometry.verticesNeedUpdate = true;
    // wavesMesh.rotation.z += 0.002;
}
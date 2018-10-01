import * as THREE from 'three';

let bones = [];
const root = new THREE.Bone();
const spine1 = new THREE.Bone();
const spine2 = new THREE.Bone();
const spine3 = new THREE.Bone();
const spine4 = new THREE.Bone();
const spine5 = new THREE.Bone();

const faceObj = new THREE.Object3D();
let heightSegment = 20;

const eyeGeo = new THREE.SphereGeometry(0.7, 10, 10);
const eyeMat = new THREE.MeshBasicMaterial({
    color: 0x44403c,
    side: THREE.DoubleSide,
    flatShading: true
});

const leftEyeMesh = new THREE.Mesh(eyeGeo, eyeMat);
const rightEyeMesh = new THREE.Mesh(eyeGeo, eyeMat);

const mouthPointsArray = [
    new THREE.Vector3(-1, 0, 0),
    new THREE.Vector3(0, 0.3, 0.5),
    new THREE.Vector3(1, 0, 0)];

const mouthCurve = new THREE.CatmullRomCurve3(mouthPointsArray);
const mouthGeo = new THREE.TubeGeometry(mouthCurve, 20, 0.3, 5);
const mouthMesh = new THREE.Mesh(mouthGeo, eyeMat);

leftEyeMesh.position.set(2.5, 0, 3.7);
rightEyeMesh.position.set(-2.5, 0, 3.7);
mouthMesh.position.set(0, 0, 5);
mouthMesh.rotation.z = Math.PI;

faceObj.add(leftEyeMesh);
faceObj.add(rightEyeMesh);
faceObj.add(mouthMesh);

// face
const faceGeo = new THREE.SphereGeometry(7, 10, 20);
const faceMat = new THREE.MeshBasicMaterial({
    color: 0xefe9e3,
    side: THREE.DoubleSide,
    flatShading: true,
    // transparent: true,
    // opacity: 0.5
});

const faceMesh = new THREE.Mesh(faceGeo, faceMat);
faceMesh.position.y = -5;

const hatGeo = new THREE.IcosahedronGeometry(1.5, 0);
const hatMat = new THREE.MeshBasicMaterial({
    color: 0xe58b61,
    side: THREE.DoubleSide,
    flatShading: true,
    transparent: true,
    opacity: 0.5
});

const hat = new THREE.Mesh(hatGeo, hatMat);
hat.position.set(0, 8, 0);
// faceObj.add(hat);

const bodyGeo = new THREE.CylinderGeometry(5, 7, 15, 20, heightSegment);
const bodyMat = new THREE.MeshBasicMaterial({
    color: 0xe58b61,
    skinning: true,
    // transparent: true,
    // opacity: 0.5
});
const skinMesh = new THREE.SkinnedMesh(bodyGeo, bodyMat);

//Create the skin indices and skin weights
for (let i = 0; i < bodyGeo.vertices.length; i++) {

    let skinIndex = calculateSkinIndex(30, bones.length, bodyGeo.vertices, i);
    let skinWeight = calculateSkinWeight(30, bones.length, bodyGeo.vertices, i);

    bodyGeo.skinIndices.push(new THREE.Vector4(skinIndex, skinIndex + 1, 0, 0));
    bodyGeo.skinWeights.push(new THREE.Vector4(1 - skinWeight, skinWeight, 0, 0));
}

// hierarchy
root.add(spine1);
spine1.add(spine2);
spine2.add(spine3);
spine3.add(spine4);
spine4.add(spine5);

// push bones
bones.push(root);
bones.push(spine1);
bones.push(spine2);
bones.push(spine3);
bones.push(spine4);
bones.push(spine5);

root.position.y = -10;
spine1.position.y = 7;
spine2.position.y = 5;
spine3.position.y = 5;
spine4.position.y = 5;
spine5.position.y = 3;

spine5.add(faceMesh);
spine5.add(leftEyeMesh);
spine5.add(rightEyeMesh);
spine5.add(hat);
spine5.add(mouthMesh);

const skeleton = new THREE.Skeleton(bones);
skinMesh.add(root);
skinMesh.position.y = -10;

// position before bind
skinMesh.add(root);
skinMesh.bind(skeleton);

// #region animation
const speed = 0.005;
const avoidSpeed = 0.01;

export function getCreature() {
    return skinMesh;
}

export function animate(angle) {
    bones[0].rotation.y = (Math.PI * angle) / 4;
    bones[1].rotation.z = (Math.PI * angle) / 4;
    bones[2].rotation.z = (Math.PI * angle) / 2;
    bones[3].rotation.z = (Math.PI * angle) / 4;
    bones[4].rotation.z = (Math.PI * angle) / 8;
    bones[5].rotation.z = (Math.PI * angle) / 8;

    let hatPos = new THREE.Vector3(faceMesh.position.x, faceMesh.position.y + 15, faceMesh.position.z);
    hat.position.lerp(hatPos, speed);
    hat.rotation.x = (Math.PI * angle) * 4;
    hat.rotation.y = (Math.PI * angle) * 4;
    hat.rotation.z = (Math.PI * angle) * 4;
}

let avoidPos = new THREE.Vector3();
let direction = new THREE.Vector3();
let clock = new THREE.Clock();
let delta = clock.getDelta();
let distance;
let hasArrived = false;

let state;

let statesEnum = {
    IDLE: "IDLE",
    MOVE: "MOVE",
    AVOID: "AVOID"
};

export function assignPosRelToBlock(blockPos, blockNewPos, blockRad, avoidRad) {

    let blockDir = direction.subVectors(blockNewPos, blockPos).normalize();
    distance = Math.floor(skinMesh.position.distanceTo(blockPos));

    avoidPos.x = skinMesh.position.x + blockDir.x;
    avoidPos.y = skinMesh.position.y + blockDir.y;
    avoidPos.z = skinMesh.position.z + blockDir.z;
    // console.log(blockDir);

    if (distance == blockRad) {
        // once arrived
        hasArrived = true;
        state = statesEnum.IDLE;
    }

    // hold the char in the idle zone, avoid jittery movement
    if (distance > blockRad + 5) {
        hasArrived = false;
        if (state !== statesEnum.IDLE) state = statesEnum.IDLE;
        // skinMesh.position.x = snapPos.x;
        // skinMesh.position.z = snapPos.z;
    }

    if (distance > blockRad) {
        if (!hasArrived) {
            state = statesEnum.MOVE;
        }
    }
    if (distance < avoidRad) {
        // avoid
        state = statesEnum.AVOID;
    }
    
    // console.log(state);
}

export function skeletonHelper(mesh) {
    const helper = new THREE.SkeletonHelper(mesh);
    helper.material.linewidth = 3;

    return helper;
}

function calculateSkinIndex(height, boneNum, vertice, number) {
    return Math.floor((vertice[number].y + (height / 2)) / height * (boneNum - 1));
}

function calculateSkinWeight(height, boneNum, vertice, number) {
    return ((vertice[number].y + (height / 2)) / height * (boneNum - 1))
        - Math.floor((vertice[number].y + (height / 2)) / height * (boneNum - 1));
}
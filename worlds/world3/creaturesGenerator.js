import * as THREE from 'three';

export function creature() {
    const creatureObj = new THREE.Object3D();
    const faceObj = new THREE.Object3D();

    const faceGeo = new THREE.SphereGeometry(8, 10, 10);
    const faceMat = new THREE.MeshBasicMaterial({
        color: 0xefe9e3,
        side: THREE.DoubleSide,
        flatShading: true,
        // transparent: true,
        // opacity: 0.6
    });

    const eyeGeo = new THREE.SphereGeometry(0.7, 10, 10);
    const eyeMat = new THREE.MeshBasicMaterial({
        color: 0x44403c,
        side: THREE.DoubleSide,
        flatShading: true
    });
    const mouthGeo = new THREE.CylinderGeometry(0.35, 0.35, 2);

    const leftEyeMesh = new THREE.Mesh(eyeGeo, eyeMat);
    const rightEyeMesh = new THREE.Mesh(eyeGeo, eyeMat);
    const mouthMesh = new THREE.Mesh(mouthGeo, eyeMat);

    leftEyeMesh.position.set(3.5, 0, 7);
    rightEyeMesh.position.set(-3.5, 0, 7);
    mouthMesh.position.set(0, -1, 7.5);
    mouthMesh.rotation.z = Math.PI / 2;

    faceObj.add(leftEyeMesh);
    faceObj.add(rightEyeMesh);
    faceObj.add(mouthMesh);

    const faceMesh = new THREE.Mesh(faceGeo, faceMat);
    faceObj.add(faceMesh);
    faceObj.position.y = 16;

    const coneGeo = new THREE.CylinderGeometry(0.1, 3, 7, 10);
    const coneMat = new THREE.MeshBasicMaterial({
        color: 0x85a495,
        side: THREE.DoubleSide,
        flatShading: true
    });

    const coneHat = new THREE.Mesh(coneGeo, coneMat);
    coneHat.position.set(5, 9, 0);
    coneHat.rotation.z = -Math.PI * 1 / 6;
    faceObj.add(coneHat);

    const bodyGeo = new THREE.CylinderGeometry(3, 7, 20, 10);
    const bodyMat = new THREE.MeshBasicMaterial({
        color: 0x85a495,
        side: THREE.DoubleSide,
        flatShading: true
    });

    const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);

    creatureObj.add(faceObj);
    creatureObj.add(bodyMesh);

    return creatureObj;
}

// red guy
export function creatureWithRigs() {
    const faceObj = new THREE.Object3D();

    let height = 10;
    let boneNum = 9;
    let heightSegment = 10;

    const eyeGeo = new THREE.SphereGeometry(0.7, 10, 10);
    const eyeMat = new THREE.MeshBasicMaterial({
        color: 0x44403c,
        side: THREE.DoubleSide,
        flatShading: true
    });

    const leftEyeMesh = new THREE.Mesh(eyeGeo, eyeMat);
    const rightEyeMesh = new THREE.Mesh(eyeGeo, eyeMat);

    const mouthPointsArray = [
        new THREE.Vector3(-1.5, 0, 0),
        new THREE.Vector3(0, 0.5, 0),
        new THREE.Vector3(1.5, 0, 0)];

    const mouthCurve = new THREE.CatmullRomCurve3(mouthPointsArray);
    const mouthGeo = new THREE.TubeGeometry(mouthCurve, 20, 0.5, 5);
    const mouthMesh = new THREE.Mesh(mouthGeo, eyeMat);

    leftEyeMesh.position.set(3.5, 0, 7);
    rightEyeMesh.position.set(-3.5, 0, 7);
    mouthMesh.position.set(0, -0.5, 7.5);
    mouthMesh.rotation.z = Math.PI;

    faceObj.add(leftEyeMesh);
    faceObj.add(rightEyeMesh);
    faceObj.add(mouthMesh);

    // face
    const faceGeo = new THREE.SphereGeometry(8, 10, 10);
    const faceMat = new THREE.MeshBasicMaterial({
        color: 0xefe9e3,
        side: THREE.DoubleSide,
        flatShading: true
    });

    const faceMesh = new THREE.Mesh(faceGeo, faceMat);
    faceObj.add(faceMesh);
    faceObj.position.y = 16;

    const coneGeo = new THREE.CylinderGeometry(0.1, 3, 7, 10);
    const coneMat = new THREE.MeshBasicMaterial({
        color: 0xe58b61,
        side: THREE.DoubleSide,
        flatShading: true
    });

    const coneHat = new THREE.Mesh(coneGeo, coneMat);
    coneHat.position.set(-5, 9, 0);
    coneHat.rotation.z = Math.PI * 1 / 6;
    faceObj.add(coneHat);

    const bodyGeo = new THREE.CylinderGeometry(3, 7, 20, 30, heightSegment);
    const bodyMat = new THREE.MeshBasicMaterial({
        color: 0xe58b61,
        skinning: true,
        // transparent: true,
        // opacity: 0.5
    });
    const skinMesh = new THREE.SkinnedMesh(bodyGeo, bodyMat);

    //Create the skin indices and skin weights
    for (let i = 0; i < bodyGeo.vertices.length; i++) {

        let skinIndex = calculateSkinIndex(30, 6, bodyGeo.vertices, i);
        let skinWeight = calculateSkinWeight(30, 6, bodyGeo.vertices, i);

        bodyGeo.skinIndices.push(new THREE.Vector4(skinIndex, skinIndex + 1, 0, 0));
        bodyGeo.skinWeights.push(new THREE.Vector4(1 - skinWeight, skinWeight, 0, 0));
    }

    let bones = [];
    const root = new THREE.Bone();
    const spine1 = new THREE.Bone();
    const spine2 = new THREE.Bone();
    const spine3 = new THREE.Bone();
    const spine4 = new THREE.Bone();
    const spine5 = new THREE.Bone();

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

    // if not using skinned mesh just bone.add(mesh)
    spine5.add(faceMesh);
    spine5.add(leftEyeMesh);
    spine5.add(rightEyeMesh);
    spine5.add(coneHat);
    spine5.add(mouthMesh);

    const skeleton = new THREE.Skeleton(bones);
    skinMesh.add(root);
    skinMesh.position.y = -10;

    // position before bind
    skinMesh.add(root);
    skinMesh.bind(skeleton);
    
    return skinMesh;
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
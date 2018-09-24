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

export function creatureWithLimbs() {
    const creatureObj = new THREE.Object3D();
    const faceObj = new THREE.Object3D();
    const handObj = new THREE.Object3D();
    const legObj = new THREE.Object3D();
    const bodyObj = new THREE.Object3D();

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

    const faceMesh = new THREE.Mesh(faceGeo, faceMat);
    faceObj.add(faceMesh);
    faceObj.position.y = 16;

    const coneGeo = new THREE.CylinderGeometry(0.1, 3, 7, 10);
    const coneMat = new THREE.MeshBasicMaterial({
        color: 0x4954c6,
        side: THREE.DoubleSide,
        flatShading: true
    });

    const coneHat = new THREE.Mesh(coneGeo, coneMat);
    coneHat.position.set(-5, 9, 0);
    coneHat.rotation.z = Math.PI * 1 / 6;
    faceObj.add(coneHat);

    const bodyGeo = new THREE.CylinderGeometry(3, 7, 20, 10);
    const bodyMat = new THREE.MeshBasicMaterial({
        color: 0x4954c6,
        side: THREE.DoubleSide,
        flatShading: true,
        // transparent: true,
        // opacity: 0.5
    });

    const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
    bodyObj.add(bodyMesh);

    const handPointsArray = [
        new THREE.Vector3(-4, 0, 0),
        new THREE.Vector3(0, 1, 0),
        new THREE.Vector3(4, 0, 0)];

    const legPointsArray = [
        new THREE.Vector3(-4, 0, 0),
        new THREE.Vector3(0, 1, 0),
        new THREE.Vector3(4, 2, 0)];


    const handCurve = new THREE.CatmullRomCurve3(handPointsArray);
    const handGeo = new THREE.TubeGeometry(handCurve, 20, 0.5, 5);
    const limbMat = new THREE.MeshBasicMaterial({
        color: 0x44403c,
        side: THREE.DoubleSide
    });

    const legCurve = new THREE.CatmullRomCurve3(legPointsArray);
    const legGeo = new THREE.TubeGeometry(legCurve, 20, 0.5, 5);

    const leftHandMesh = new THREE.Mesh(handGeo, limbMat);
    const rightHandMesh = new THREE.Mesh(handGeo, limbMat);
    const leftLegMesh = new THREE.Mesh(legGeo, limbMat);
    const rightLegMesh = new THREE.Mesh(legGeo, limbMat);

    handObj.add(leftHandMesh);
    handObj.add(rightHandMesh);

    leftHandMesh.position.set(-7, 0, 0);
    rightHandMesh.position.set(7, 0, 0);
    handObj.position.set(0, 7, 0);
    handObj.rotation.z = Math.PI;

    legObj.add(leftLegMesh);
    legObj.add(rightLegMesh);
    leftLegMesh.position.set(-2, 0, 0);
    rightLegMesh.position.set(2, 0, 0);
    legObj.position.set(0, -12, 0);
    leftLegMesh.rotation.z = -Math.PI / 2;
    leftLegMesh.rotation.y = Math.PI;
    rightLegMesh.rotation.z = -Math.PI / 2;

    bodyObj.add(handObj);
    bodyObj.add(legObj);
    creatureObj.add(faceObj);
    creatureObj.add(bodyObj);

    return creatureObj;
}

export function BoneTest() {
    let height = 10;
    let boneNum = 3;
    let heightSegment = 5;
    const armGeo = new THREE.CylinderGeometry(1, 1, height, 12, heightSegment);
    const armMat = new THREE.MeshBasicMaterial({ color: "black", skinning: true });
    const armMesh = new THREE.SkinnedMesh(armGeo, armMat);

    //Create the skin indices and skin weights
    for (let i = 0; i < armGeo.vertices.length; i++) {

        let skinIndex = calculateSkinIndex(height, boneNum, armGeo.vertices, i);
        let skinWeight = calculateSkinWeight(height, boneNum, armGeo.vertices, i);

        armGeo.skinIndices.push(new THREE.Vector4(skinIndex, skinIndex + 1, 0, 0));
        armGeo.skinWeights.push(new THREE.Vector4(1 - skinWeight, skinWeight, 0, 0));
    }

    let bones = [];
    const root = new THREE.Bone();
    const arm1 = new THREE.Bone();
    const arm2 = new THREE.Bone();

    root.add(arm1);
    arm1.add(arm2);

    bones.push(root);
    bones.push(arm1);
    bones.push(arm2);

    root.position.y = -6;
    arm1.position.y = 6;
    arm2.position.y = 6;

    const armSkeleton = new THREE.Skeleton(bones);
    armMesh.add(root);
    armMesh.bind(armSkeleton);

    return armMesh;
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
    return ((vertice[number].y + (height / 2)) / height * (boneNum - 1)) - Math.floor((vertice[number].y + (height / 2)) / height * (boneNum - 1));   
}
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

export function creatureWithRigs() {
    const creatureObj = new THREE.Object3D();
    const faceObj = new THREE.Object3D();
    const handObj = new THREE.Object3D();
    const legObj = new THREE.Object3D();
    const bodyObj = new THREE.Object3D();
    const rigObj = new THREE.Object3D();

    // arm
    let height = 10;
    let boneNum = 3;
    let heightSegment = 5;
    const geo = new THREE.CylinderGeometry(1, 1, height, 12, heightSegment);
    const mat = new THREE.MeshBasicMaterial({
        color: "black",
        skinning: true,
        transparent: true,
        opacity: 0.7
    });
    const skinMesh = new THREE.SkinnedMesh(geo, mat);

    //Create the skin indices and skin weights
    for (let i = 0; i < geo.vertices.length; i++) {

        let skinIndex = calculateSkinIndex(height, boneNum, geo.vertices, i);
        let skinWeight = calculateSkinWeight(height, boneNum, geo.vertices, i);

        geo.skinIndices.push(new THREE.Vector4(skinIndex, skinIndex + 1, 0, 0));
        geo.skinWeights.push(new THREE.Vector4(1 - skinWeight, skinWeight, 0, 0));
    }

    let bones = [];
    const root = new THREE.Bone();
    const head = new THREE.Bone();
    const leftArm1 = new THREE.Bone();
    const leftArm2 = new THREE.Bone();
    const rightArm1 = new THREE.Bone();
    const rightArm2 = new THREE.Bone();
    const pelvis = new THREE.Bone();
    const leftLeg1 = new THREE.Bone();
    const leftLeg2 = new THREE.Bone();
    const rightLeg1 = new THREE.Bone();
    const rightLeg2 = new THREE.Bone();

    // parenting
    root.add(head);
    root.add(leftArm1);
    leftArm1.add(leftArm2);
    root.add(rightArm1);
    rightArm1.add(rightArm2);
    root.add(pelvis);
    pelvis.add(leftLeg1);
    leftLeg1.add(leftLeg2);
    pelvis.add(rightLeg1);
    rightLeg1.add(rightLeg2);

    // push bones
    bones.push(root);
    bones.push(head);
    bones.push(leftArm1);
    bones.push(leftArm2);
    bones.push(rightArm1);
    bones.push(rightArm2);
    bones.push(pelvis);
    bones.push(leftLeg1);
    bones.push(leftLeg2);
    bones.push(rightLeg1);
    bones.push(rightLeg2);

    root.position.y = 0;
    head.position.y = 5;
    pelvis.position.y = -10;

    leftArm1.position.x = -5;
    leftArm1.position.y = 0;

    leftArm2.position.x = -5;
    leftArm2.position.y = 0;

    rightArm1.position.x = 5;
    rightArm1.position.y = 0;

    rightArm2.position.x = 5;
    rightArm2.position.y = 0;
    
    leftLeg1.position.x = -5;
    leftLeg1.position.y = -5;

    leftLeg2.position.x = -5;
    leftLeg2.position.y = -5;

    rightLeg1.position.x = 5;
    rightLeg1.position.y = -5;

    rightLeg2.position.x = 5;
    rightLeg2.position.y = -5;

    const skeleton = new THREE.Skeleton(bones);
    skinMesh.add(root);
    skinMesh.bind(skeleton);

    // face
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
        color: 0xe58b61,
        side: THREE.DoubleSide,
        flatShading: true
    });

    const coneHat = new THREE.Mesh(coneGeo, coneMat);
    coneHat.position.set(-5, 9, 0);
    coneHat.rotation.z = Math.PI * 1 / 6;
    faceObj.add(coneHat);

    const bodyGeo = new THREE.CylinderGeometry(3, 7, 20, 10);
    const bodyMat = new THREE.MeshBasicMaterial({
        color: 0xe58b61,
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

    return skinMesh;
}

export function limb() {
    let height = 12;
    let boneNum = 3;
    let heightSegment = 5;
    const limbGeo = new THREE.CylinderGeometry(0.5, 0.5, height, 12, heightSegment);
    const limbMat = new THREE.MeshBasicMaterial({ color: 0x44403c, skinning: true });
    const limbMesh = new THREE.SkinnedMesh(limbGeo, limbMat);

    //Create the skin indices and skin weights
    for (let i = 0; i < limbGeo.vertices.length; i++) {

        let skinIndex = calculateSkinIndex(height, boneNum, limbGeo.vertices, i);
        let skinWeight = calculateSkinWeight(height, boneNum, limbGeo.vertices, i);

        limbGeo.skinIndices.push(new THREE.Vector4(skinIndex, skinIndex + 1, 0, 0));
        limbGeo.skinWeights.push(new THREE.Vector4(1 - skinWeight, skinWeight, 0, 0));
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
    limbMesh.add(root);
    limbMesh.bind(armSkeleton);

    return limbMesh;
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
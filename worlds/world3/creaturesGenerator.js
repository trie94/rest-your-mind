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
    const faceObj = new THREE.Object3D();

    let height = 10;
    let boneNum = 5;
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

    const bodyGeo = new THREE.CylinderGeometry(3, 7, 20, 12, heightSegment);
    const bodyMat = new THREE.MeshBasicMaterial({
        color: 0xe58b61,
        skinning: true,
        // transparent: true,
        // opacity: 0.5
    });
    const skinMesh = new THREE.SkinnedMesh(bodyGeo, bodyMat);

    const leftLegGeo = new THREE.CylinderGeometry(0.5, 0.5, 10);
    const rightLegGeo = new THREE.CylinderGeometry(0.5, 0.5, 10);
    const limbMat = new THREE.MeshBasicMaterial({
        color: 0x44403c,
        // skinning: true
    });

    const leftLegMesh = new THREE.Mesh(leftLegGeo, limbMat);
    const rightLegMesh = new THREE.Mesh(rightLegGeo, limbMat);

    const leftHandGeo = new THREE.CylinderGeometry(0.5, 0.5, 10);
    const rightHandGeo = new THREE.CylinderGeometry(0.5, 0.5, 10);

    const leftHandMesh = new THREE.Mesh(leftHandGeo, limbMat);
    const rightHandMesh = new THREE.Mesh(rightHandGeo, limbMat);
    leftHandMesh.rotateZ(Math.PI/2);
    rightHandMesh.rotateZ(Math.PI/2);

    //Create the skin indices and skin weights
    for (let i = 0; i < bodyGeo.vertices.length; i++) {

        let skinIndex = calculateSkinIndex(30, 6, bodyGeo.vertices, i);
        let skinWeight = calculateSkinWeight(30, 6, bodyGeo.vertices, i);

        bodyGeo.skinIndices.push(new THREE.Vector4(skinIndex, skinIndex + 1, 0, 0));
        bodyGeo.skinWeights.push(new THREE.Vector4(1 - skinWeight, skinWeight, 0, 0));
    }

    let bones = [];
    const root = new THREE.Bone();
    const head = new THREE.Bone();
    const spine1 = new THREE.Bone();
    const spine2 = new THREE.Bone();
    const spine3 = new THREE.Bone();
    const leftLeg = new THREE.Bone();
    const rightLeg = new THREE.Bone();
    const leftHand = new THREE.Bone();
    const rightHand = new THREE.Bone();

    // hierarchy
    root.add(head);
    head.add(spine1);
    spine1.add(spine2);
    spine1.add(leftHand);
    spine1.add(rightHand);
    spine2.add(spine3);
    spine3.add(leftLeg);
    spine3.add(rightLeg);

    // push bones
    bones.push(root);
    bones.push(head);
    bones.push(spine1);
    bones.push(spine2);
    bones.push(spine3);
    bones.push(leftHand);
    bones.push(rightHand);
    bones.push(leftLeg);
    bones.push(rightLeg);

    root.position.y = 15;
    head.position.y = 0;
    spine1.position.y = -5;
    spine2.position.y = -10;
    spine3.position.y = -10;

    leftHand.position.y = -3;
    leftHand.position.x = -5;
    rightHand.position.y = -3;
    rightHand.position.x = 5;

    leftLeg.position.y = -5;
    leftLeg.position.x = -2;
    rightLeg.position.y = -5;
    rightLeg.position.x = 2;


    // if not using skinned mesh just bone.add(mesh)
    root.add(faceMesh);
    root.add(leftEyeMesh);
    root.add(rightEyeMesh);
    root.add(coneHat);
    root.add(mouthMesh);

    leftLeg.add(leftLegMesh);
    rightLeg.add(rightLegMesh);
    leftHand.add(leftHandMesh);
    rightHand.add(rightHandMesh);

    const skeleton = new THREE.Skeleton(bones);
    skinMesh.add(root);
    skinMesh.position.y = -10;

    // position before bind
    skinMesh.add(root);
    skinMesh.bind(skeleton);
    
    return skinMesh;
}

export function limb() {
    let height = 10;
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

    root.position.y = -1 * height / 2;
    arm1.position.y = height / 2;
    arm2.position.y = height / 2;

    const armSkeleton = new THREE.Skeleton(bones);
    limbMesh.add(root);
    limbMesh.bind(armSkeleton);

    return limbMesh;
}

export function spine() {
    let height = 20;
    let boneNum = 3;
    let heightSegment = 5;
    const spineGeo = new THREE.CylinderGeometry(3, 7, height, 12, heightSegment);
    const spineMat = new THREE.MeshBasicMaterial({ color: 0x85a495, skinning: true });
    const spineMesh = new THREE.SkinnedMesh(spineGeo, spineMat);

    //Create the skin indices and skin weights
    for (let i = 0; i < spineGeo.vertices.length; i++) {

        let skinIndex = calculateSkinIndex(height, boneNum, spineGeo.vertices, i);
        let skinWeight = calculateSkinWeight(height, boneNum, spineGeo.vertices, i);

        spineGeo.skinIndices.push(new THREE.Vector4(skinIndex, skinIndex + 1, 0, 0));
        spineGeo.skinWeights.push(new THREE.Vector4(1 - skinWeight, skinWeight, 0, 0));
    }

    let bones = [];
    const root = new THREE.Bone();
    const spine = new THREE.Bone();
    const pelvis = new THREE.Bone();

    root.add(spine);
    spine.add(pelvis);

    bones.push(root);
    bones.push(spine);
    bones.push(pelvis);

    root.position.y = -1 * height / 2;
    spine.position.y = height / 2;
    pelvis.position.y = height / 2;

    const spineSkeleton = new THREE.Skeleton(bones);
    spineMesh.add(root);
    spineMesh.bind(spineSkeleton);
    return spineMesh;
}

export function face() {
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

    return faceObj;
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
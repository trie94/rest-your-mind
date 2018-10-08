import * as THREE from 'three';
import Munyu from './Munyu';

export default function MunyuGenerator() {

    let munyus = [];
    let pointVertex = [];
    let speed = [];
    const munyuNum = 30;
    // each vertice point// each vertice point
    const pointGeo = new THREE.Geometry();

    createGrid();
    getRandomPos();

    function createGrid() {
        // grid for generating random islands
        const config = {
            height: 400,
            width: 400,
            heightSeg: 50,
            widthSeg: 50,
            color: "black"
        };

        // set 0 opacity for production
        const material = new THREE.LineBasicMaterial({
            color: config.color
        });

        // line
        const gridObject = new THREE.Object3D();
        const gridGeo = new THREE.Geometry();

        const stepw = 2 * config.width / config.widthSeg;
        const steph = 2 * config.height / config.heightSeg;

        // line - width
        for (let i = -config.width; i <= config.width; i += stepw) {
            gridGeo.vertices.push(new THREE.Vector3(-config.height, i, 0));
            gridGeo.vertices.push(new THREE.Vector3(config.height, i, 0));
        }

        // line - height
        for (let i = -config.height; i <= config.height; i += steph) {
            gridGeo.vertices.push(new THREE.Vector3(i, -config.width, 0));
            gridGeo.vertices.push(new THREE.Vector3(i, config.width, 0));
        }

        // draw grid line
        const line = new THREE.LineSegments(gridGeo, material);
        gridObject.add(line);
        gridObject.rotation.x = Math.PI / 2;

        // point vertices
        for (let i = -config.width; i <= config.width; i += stepw) {
            for (let j = -config.height; j <= config.height; j += steph) {
                pointGeo.vertices.push(new THREE.Vector3(i, 0, j));
            }
        }
    }

    function getRandomPos() {
        // push random vertices to the array
        let prevIndex = null;
        for (let i = 0; i < munyuNum; i++) {

            let index = Math.floor((Math.random() * pointGeo.vertices.length - 1) + 1);

            // prevent overlap
            while (index === prevIndex) {
                index = Math.floor((Math.random() * pointGeo.vertices.length - 1) + 1);
            }

            pointVertex[i] = pointGeo.vertices[index];
            prevIndex = index;
        }
        return pointVertex;
    }

    this.instantiate = function () {
        for (let i = 0; i < munyuNum; i++) {
            const munyu = new Munyu();
            munyus.push(munyu);
            speed.push((Math.random() * 0.005) + 0.001);
        }
        return munyus;
    }

    this.getPos = function () {
        return pointVertex;
    }

    this.targetPos = function () {
        let randomVertex = getRandomPos();
        return randomVertex;
    }

    this.getSpeed = function () {
        return speed;
    }
}

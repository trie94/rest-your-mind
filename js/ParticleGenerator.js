import * as THREE from 'three';
THREE.GPUParticleSystem = require('./GPUParticleSystem');

export default function ParticleGenerator() {
    let tick = 0;
    let clock = new THREE.Clock(true);
    let options, spawnerOptions, particleSystem;

    particleSystem = new THREE.GPUParticleSystem({
            maxParticles: 50000
    });

    options = {
        position: new THREE.Vector3(),
        positionRandomness: 0.3,
        velocity: new THREE.Vector3(),
        velocityRandomness: 0.5,
        color: 0xaa88ff,
        colorRandomness: 0.2,
        turbulence: 1,
        lifetime: 12,
        size: 5,
        sizeRandomness: 12
    };
    spawnerOptions = {
        spawnRate: 35000,
        horizontalSpeed: 2.5,
        verticalSpeed: 2.33,
        timeScale: .5
    };

    let colors = [0x11c6fd, 0xffb9f8, 0xa099ff];

    this.update = function () {
        var delta = clock.getDelta();
        tick += delta;

        if (tick < 0) tick = 0;
        if (delta > 0) {
            for (var c in colors) {
                var p = colors[c];
                options.color = p;
                options.position.x = Math.sin(tick + (Math.PI * 0.5 * c) * spawnerOptions.horizontalSpeed) * 40;
                options.position.y = Math.cos(tick + (Math.PI * 0.5 * c) * spawnerOptions.verticalSpeed) * 20;
                options.position.z = Math.sin(tick + (Math.PI * 0.5 * c) * spawnerOptions.horizontalSpeed + spawnerOptions.verticalSpeed) * 5;

                for (var x = 0; x < spawnerOptions.spawnRate * delta; x++) {
                    particleSystem.spawnParticle(options);
                }
            }
        }
    }
}
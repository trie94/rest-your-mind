varying vec2 vUv;
varying vec3 localPosition;

void main() {
    vUv = uv;
    localPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
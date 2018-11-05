uniform vec3 color;
varying vec3 viewPos;
varying vec3 viewNormal;

void main() {
    gl_FragColor = vec4(color, 0.6);
}

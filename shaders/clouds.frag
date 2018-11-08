uniform vec3 color;
varying vec3 viewPos;
varying vec3 viewNormal;
varying vec3 worldPos;
varying vec3 worldNormal;

void main() {
    gl_FragColor = vec4(color, 0.6);
}

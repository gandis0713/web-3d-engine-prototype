#version 310 es
layout (location = 0) in vec2 position;
// layout (location = 1) in vec3 incolor;

out vec3 color;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
  // gl_PointSize = 3.0;
  // color = incolor;
}
const GL = require("gl-react");
const React = require("react");

const shaders = GL.Shaders.create({
  helloGL: {
    frag: `
precision highp float;
varying vec2 uv;
uniform sampler2D image;

uniform float blur;
uniform float dirx;
uniform float diry;

void main () {
  vec4 c = texture2D(image, uv);
  vec2 tc = uv;
  // Algorithm from Chapter 16 of OpenGL Shading Language
  vec4 sum = vec4(0.0);
  float hstep = dirx;
  float vstep = diry; 
      sum += texture2D(image, vec2(tc.x - 4.0*blur*hstep, tc.y - 4.0*blur*vstep)) * 0.0162162162f;
    sum += texture2D(image, vec2(tc.x - 3.0*blur*hstep, tc.y - 3.0*blur*vstep)) * 0.0540540541f;
    sum += texture2D(image, vec2(tc.x - 2.0*blur*hstep, tc.y - 2.0*blur*vstep)) * 0.1216216216f;
    sum += texture2D(image, vec2(tc.x - 1.0*blur*hstep, tc.y - 1.0*blur*vstep)) * 0.1945945946f;

    sum += texture2D(image, vec2(tc.x, tc.y)) * 0.2270270270;

    sum += texture2D(image, vec2(tc.x + 1.0*blur*hstep, tc.y + 1.0*blur*vstep)) * 0.1945945946f;
    sum += texture2D(image, vec2(tc.x + 2.0*blur*hstep, tc.y + 2.0*blur*vstep)) * 0.1216216216f;
    sum += texture2D(image, vec2(tc.x + 3.0*blur*hstep, tc.y + 3.0*blur*vstep)) * 0.0540540541f;
    sum += texture2D(image, vec2(tc.x + 4.0*blur*hstep, tc.y + 4.0*blur*vstep)) * 0.0162162162f;
  gl_FragColor = sum;
}
    `
  }
});

module.exports = GL.createComponent(
  ({ image }) => <GL.Node shader={shaders.helloGL}
    uniforms={{
      image,
      blur: Settings.blur / 5,
      dirx: Settings.dirx * 0.1,
      diry: Settings.diry * 0.1  
    }} />,
  { displayName: "HelloGL" });
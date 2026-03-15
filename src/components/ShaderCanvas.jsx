import { useEffect, useRef } from 'react';

const vertexShaderSource = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const ShaderCanvas = ({ theme }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const isLight = theme === 'light';
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) {
      console.error('WebGL not supported');
      return;
    }

    const fragmentShaderSource = `
  precision highp float;
  uniform vec2 u_resolution;
  uniform float u_time;

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    
    // Ribs setup (fluted glass effect)
    float ribWidth = 48.0; 
    float numRibs = u_resolution.x / ribWidth;
    float ribX = fract(uv.x * numRibs);
    
    // Normal of the rib
    float lx = ribX * 2.0 - 1.0;
    float nz = sqrt(1.0 - lx * lx * 0.9); 
    vec3 normal = normalize(vec3(lx, 0.0, nz));
    
    // Refraction offset
    float refrStrength = 0.03;
    vec2 refrUv = uv + vec2(normal.x * refrStrength, 0.0);
    
    // Background waves
    vec2 p = refrUv * 2.0 - 1.0;
    p.x *= u_resolution.x / u_resolution.y;
    
    float t = u_time * 0.25;
    
    // Smooth, organic background pattern
    float w1 = sin(p.x * 1.2 + p.y * 0.8 + t);
    float w2 = sin(p.x * 0.9 - p.y * 1.2 - t * 0.7);
    float w3 = sin(p.x * 2.1 + t * 1.1) * 0.3;
    
    float wave = (w1 + w2) * 0.5 + w3;
    wave = wave * 0.5 + 0.5; 
    
    // Theme Colors
    vec3 colorVoid = ${isLight ? 'vec3(0.91, 0.89, 0.86)' : 'vec3(0.06, 0.06, 0.05)'};      // #E8E4DC or #0F0F0E
    vec3 colorIron = ${isLight ? 'vec3(0.78, 0.76, 0.72)' : 'vec3(0.10, 0.10, 0.09)'};      // #C8C3B8 or #1A1A18
    vec3 colorMoss = vec3(0.23, 0.31, 0.23);      // #3B4F3A
    vec3 colorConcrete = ${isLight ? 'vec3(0.06, 0.06, 0.05)' : 'vec3(0.91, 0.89, 0.86)'};  // #0F0F0E or #E8E4DC
    
    // Mix background colors (Void to Moss to Concrete highlights)
    vec3 bgColor = mix(colorVoid, colorIron, smoothstep(0.0, 0.4, wave));
    bgColor = mix(bgColor, colorMoss, smoothstep(0.4, 0.8, wave));
    bgColor = mix(bgColor, colorIron * 1.2, smoothstep(0.8, 1.0, wave));
    
    // Lighting
    vec3 lightDir = normalize(vec3(0.5, 0.3, 1.0)); 
    float diffuse = max(0.0, dot(normal, lightDir));
    
    vec3 viewDir = vec3(0.0, 0.0, 1.0);
    vec3 halfVector = normalize(lightDir + viewDir);
    float specular = pow(max(0.0001, dot(normal, halfVector)), 15.0);
    
    // Combine
    vec3 finalColor = bgColor * (0.65 + 0.35 * diffuse);
    
    // Specular highlights
    finalColor += specular * colorConcrete * 0.12;
    
    // Ambient occlusion in the grooves
    float ao = smoothstep(0.0, 0.3, nz);
    finalColor *= mix(0.5, 1.0, ao);
    
    // Groove crispness
    float groove = smoothstep(0.88, 1.0, abs(lx));
    finalColor = mix(finalColor, colorVoid * 0.3, groove);
    
    // Vignette
    float vignette = length(uv - 0.5);
    finalColor *= smoothstep(1.0, 0.4, vignette);
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

    const compileShader = (type, source) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = compileShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource);

    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = new Float32Array([
      -1.0, -1.0,
       1.0, -1.0,
      -1.0,  1.0,
      -1.0,  1.0,
       1.0, -1.0,
       1.0,  1.0,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    const timeLocation = gl.getUniformLocation(program, 'u_time');

    let animationFrameId;
    const startTime = Date.now();

    const render = () => {
      const displayWidth = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;

      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
      }

      gl.uniform2f(resolutionLocation, gl.canvas.width, gl.canvas.height);
      gl.uniform1f(timeLocation, (Date.now() - startTime) / 1000.0);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      gl.deleteProgram(program);
      gl.deleteBuffer(positionBuffer);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      style={{ display: 'block' }}
    />
  );
};

export default ShaderCanvas;

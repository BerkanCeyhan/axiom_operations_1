const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProblemSection-ToZs2rE8.js","assets/rolldown-runtime-DF2fYuay.js","assets/vendor-react-DFfhSqMz.js","assets/vendor-C0hYci0u.js","assets/vendor-gsap-Bsw38si_.js","assets/FailedSolutions-BrDIZB9k.js","assets/Mechanism-3qbsZUH3.js","assets/Capabilities-BDIXIFBI.js","assets/SocialProof-DVjDTGV2.js","assets/Process-D4GFsgxy.js","assets/FAQ-DCg6Ukvz.js","assets/FinalCTA-BJ1I4qTR.js","assets/Footer-COLVJNHC.js","assets/Impressum-CF3thzT2.js","assets/Datenschutz-DLqGbt7F.js","assets/Audit-CC9rSYV4.js","assets/AGB-CQLIkPxP.js","assets/Success-CV66g83j.js","assets/NotFound-DdhhoNiW.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{_ as t,b as n,g as r,h as i,m as a,p as o,v as s,y as c}from"./vendor-react-DFfhSqMz.js";import"./vendor-C0hYci0u.js";import{n as l,t as u}from"./vendor-gsap-Bsw38si_.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var d=c(),f=e(n(),1),p=o(),m=({theme:e,isOverLight:t,activeSection:n})=>{let[r,a]=(0,f.useState)(!1),o=e===`light`,s=o||t;return(0,f.useEffect)(()=>{let e=()=>{a(window.scrollY>20)};return window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]),(0,p.jsx)(`header`,{className:`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 max-w-4xl w-[calc(100%-3rem)] md:w-max rounded-full border ${t||o?`border-dark/10`:`border-border`} ${r?(s?`bg-white/80`:`bg-dark/80`)+` backdrop-blur-xl py-3 px-6 shadow-lg`:(s?`bg-white/40`:`bg-dark/40`)+` backdrop-blur-md py-4 px-8`}`,children:(0,p.jsxs)(`div`,{className:`flex items-center justify-between md:justify-center md:gap-12`,children:[(0,p.jsx)(`a`,{href:`#`,className:`flex items-center gap-2 group`,children:(0,p.jsx)(`span`,{className:`font-mono text-sm tracking-widest font-medium uppercase transition-colors ${s?`text-[#0F0F0E]`:`text-primary`}`,children:`Axiom`})}),(0,p.jsx)(`nav`,{className:`hidden md:flex items-center gap-8 text-[11px] font-sans font-medium uppercase tracking-widest`,children:[{id:`problem`,label:`Problem`},{id:`mechanism`,label:`Architektur`},{id:`capabilities`,label:`Systeme`}].map(e=>(0,p.jsx)(`a`,{href:`#${e.id}`,className:`transition-colors duration-300 ${n===e.id?s?`text-[#0F0F0E]`:`text-primary`:s?`text-[#0F0F0E]/40 hover:text-[#0F0F0E]`:`text-muted hover:text-primary`}`,children:e.label},e.id))}),(0,p.jsx)(i,{to:`/audit`,className:`hidden md:inline-flex items-center justify-center border transition-all duration-300 px-6 py-2.5 font-mono text-[10px] uppercase tracking-widest rounded-none ${s?`border-[#0F0F0E] bg-transparent text-[#0F0F0E] hover:bg-[#0F0F0E] hover:text-white`:`border-accent bg-transparent text-primary hover:bg-accent hover:text-primary`}`,children:`Analyse`}),(0,p.jsx)(i,{to:`/audit`,className:`md:hidden inline-flex items-center justify-center border px-4 py-2 font-mono text-[9px] uppercase tracking-widest transition-colors ${s?`border-[#0F0F0E]/10 text-[#0F0F0E] hover:bg-[#0F0F0E] hover:text-white`:`border-border text-primary hover:bg-primary hover:text-dark`}`,children:`Analyse`})]})})},h=`
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`,g=({theme:e})=>{let t=(0,f.useRef)(null);return(0,f.useEffect)(()=>{let n=e===`light`,r=t.current;if(!r)return;let i=r.getContext(`webgl`);if(!i){console.error(`WebGL not supported`);return}let a=`
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
    vec3 colorVoid = ${n?`vec3(0.91, 0.89, 0.86)`:`vec3(0.06, 0.06, 0.05)`};      // #E8E4DC or #0F0F0E
    vec3 colorIron = ${n?`vec3(0.78, 0.76, 0.72)`:`vec3(0.10, 0.10, 0.09)`};      // #C8C3B8 or #1A1A18
    vec3 colorMoss = vec3(0.23, 0.31, 0.23);      // #3B4F3A
    vec3 colorConcrete = ${n?`vec3(0.06, 0.06, 0.05)`:`vec3(0.91, 0.89, 0.86)`};  // #0F0F0E or #E8E4DC
    
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
`,o=(e,t)=>{let n=i.createShader(e);return n?(i.shaderSource(n,t),i.compileShader(n),i.getShaderParameter(n,i.COMPILE_STATUS)?n:(console.error(`Shader compile error:`,i.getShaderInfoLog(n)),i.deleteShader(n),null)):null},s=o(i.VERTEX_SHADER,h),c=o(i.FRAGMENT_SHADER,a);if(!s||!c)return;let l=i.createProgram();if(!l)return;if(i.attachShader(l,s),i.attachShader(l,c),i.linkProgram(l),!i.getProgramParameter(l,i.LINK_STATUS)){console.error(`Program link error:`,i.getProgramInfoLog(l));return}i.useProgram(l);let u=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,u);let d=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]);i.bufferData(i.ARRAY_BUFFER,d,i.STATIC_DRAW);let f=i.getAttribLocation(l,`a_position`);i.enableVertexAttribArray(f),i.vertexAttribPointer(f,2,i.FLOAT,!1,0,0);let p=i.getUniformLocation(l,`u_resolution`),m=i.getUniformLocation(l,`u_time`),g,_=Date.now(),v=()=>{let e=r.clientWidth,t=r.clientHeight;(r.width!==e||r.height!==t)&&(r.width=e,r.height=t,i.viewport(0,0,i.canvas.width,i.canvas.height)),i.uniform2f(p,i.canvas.width,i.canvas.height),i.uniform1f(m,(Date.now()-_)/1e3),i.drawArrays(i.TRIANGLES,0,6),g=requestAnimationFrame(v)};return v(),()=>{cancelAnimationFrame(g),i.deleteProgram(l),i.deleteBuffer(u)}},[e]),(0,p.jsx)(`canvas`,{ref:t,className:`absolute inset-0 w-full h-full z-0 pointer-events-none`,style:{display:`block`}})},_=({theme:e})=>{let t=(0,f.useRef)(null);return(0,f.useEffect)(()=>{let e=l.context(()=>{l.from(`.hero-element`,{y:40,opacity:0,duration:.8,stagger:.12,delay:.3,ease:`power2.out`})},t);return()=>e.revert()},[]),(0,p.jsxs)(`section`,{ref:t,className:`relative min-h-[100dvh] w-full flex flex-col justify-center md:justify-center pt-32 pb-10 md:pb-32 px-5 md:px-12 lg:px-20 overflow-hidden bg-dark`,children:[(0,p.jsx)(g,{theme:e}),(0,p.jsx)(`div`,{className:`absolute inset-0 z-0 bg-gradient-to-t from-dark/95 via-dark/40 to-transparent pointer-events-none`}),(0,p.jsx)(`div`,{className:`relative z-10 w-full max-w-5xl md:ml-[8vw]`,children:(0,p.jsx)(`div`,{className:`relative p-4 md:p-12 lg:p-16 rounded-md backdrop-blur-md bg-white/[0.20] border border-white/5 max-w-4xl hero-element`,children:(0,p.jsxs)(`div`,{className:`max-w-3xl`,children:[(0,p.jsx)(`div`,{className:`mb-8`,children:(0,p.jsxs)(`h1`,{className:`flex flex-col`,children:[(0,p.jsx)(`span`,{className:`font-sans font-light uppercase tracking-[0.2em] text-xs sm:text-sm md:text-base mb-2 md:mb-4`,children:`Fulfillment OS™`}),(0,p.jsx)(`span`,{className:`font-drama italic text-primary leading-[0.9] text-[clamp(2.5rem,8vw,9rem)]`,children:`Weniger Chaos. Mehr Marge.`})]})}),(0,p.jsx)(`p`,{className:`font-sans font-normal text-primary/80 text-base md:text-lg lg:text-xl max-w-prose leading-[1.7] mb-10`,children:`Wir automatisieren dein Fulfillment mit KI-Agenten und smarten Prozessen. Du skalierst, ohne für jeden neuen Kunden einen neuen Mitarbeiter einstellen zu müssen. Kein operatives Chaos mehr, keine explodierenden Personalkosten, kein Flaschenhals-Dasein.`}),(0,p.jsx)(`div`,{className:`font-mono text-xs mb-8 tracking-widest uppercase`,children:`// Für Agenturen, Dienstleister & Berater mit 5- bis 6-stelligen Monatsumsätzen`}),(0,p.jsx)(`div`,{className:`inline-block`,children:(0,p.jsx)(i,{to:`/audit`,className:`btn-hero inline-flex items-center text-white text-xs  md:text-lg`,children:(0,p.jsx)(`span`,{children:`Kostenlose Prozess-Analyse anfragen`})})})]})})})]})},v=(0,f.lazy)(()=>s(()=>import(`./ProblemSection-ToZs2rE8.js`),__vite__mapDeps([0,1,2,3,4]))),y=(0,f.lazy)(()=>s(()=>import(`./FailedSolutions-BrDIZB9k.js`),__vite__mapDeps([5,1,2,3,4]))),b=(0,f.lazy)(()=>s(()=>import(`./Mechanism-3qbsZUH3.js`),__vite__mapDeps([6,1,2,3,4]))),x=(0,f.lazy)(()=>s(()=>import(`./Capabilities-BDIXIFBI.js`),__vite__mapDeps([7,1,2,3,4]))),S=(0,f.lazy)(()=>s(()=>import(`./SocialProof-DVjDTGV2.js`),__vite__mapDeps([8,1,2,3,4]))),C=(0,f.lazy)(()=>s(()=>import(`./Process-D4GFsgxy.js`),__vite__mapDeps([9,1,2,3,4]))),w=(0,f.lazy)(()=>s(()=>import(`./FAQ-DCg6Ukvz.js`),__vite__mapDeps([10,1,2,3,4]))),T=(0,f.lazy)(()=>s(()=>import(`./FinalCTA-BJ1I4qTR.js`),__vite__mapDeps([11,1,2,3,4]))),E=(0,f.lazy)(()=>s(()=>import(`./Footer-COLVJNHC.js`),__vite__mapDeps([12,2,1,3]))),D=(0,f.lazy)(()=>s(()=>import(`./Impressum-CF3thzT2.js`),__vite__mapDeps([13,1,2,3]))),O=(0,f.lazy)(()=>s(()=>import(`./Datenschutz-DLqGbt7F.js`),__vite__mapDeps([14,1,2,3]))),k=(0,f.lazy)(()=>s(()=>import(`./Audit-CC9rSYV4.js`),__vite__mapDeps([15,1,2,3]))),A=(0,f.lazy)(()=>s(()=>import(`./AGB-CQLIkPxP.js`),__vite__mapDeps([16,1,2,3]))),j=(0,f.lazy)(()=>s(()=>import(`./Success-CV66g83j.js`),__vite__mapDeps([17,1,2,3]))),M=()=>(0,p.jsx)(`div`,{className:`min-h-[50vh] bg-dark`}),N=(0,f.lazy)(()=>s(()=>import(`./NotFound-DdhhoNiW.js`),__vite__mapDeps([18,1,2,3]))),P=({theme:e,isNavbarOverLight:t,activeSection:n})=>(0,p.jsxs)(`div`,{className:`min-h-screen font-sans relative overflow-x-hidden w-full`,children:[(0,p.jsx)(m,{theme:e,isOverLight:t,activeSection:n}),(0,p.jsx)(_,{theme:e}),(0,p.jsxs)(`div`,{id:`content-start`,children:[(0,p.jsx)(v,{theme:e}),(0,p.jsx)(y,{theme:e}),(0,p.jsx)(b,{theme:e}),(0,p.jsx)(x,{theme:e}),(0,p.jsx)(S,{theme:e}),(0,p.jsx)(C,{theme:e}),(0,p.jsx)(w,{theme:e}),(0,p.jsx)(T,{theme:e}),(0,p.jsx)(E,{theme:e})]})]});function F(){let[e,n]=(0,f.useState)(`dark`),[i,a]=(0,f.useState)(!1),[o,s]=(0,f.useState)(``);return(0,f.useEffect)(()=>{new URLSearchParams(window.location.search).get(`v`)===`L`?(n(`light`),document.documentElement.classList.add(`theme-light`)):(n(`dark`),document.documentElement.classList.remove(`theme-light`))},[]),(0,f.useEffect)(()=>{let e=[`problem`,`mechanism`,`capabilities`,`proof`],t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&s(e.target.id)})},{root:null,rootMargin:`-10% 0px -85% 0px`,threshold:0});e.forEach(e=>{let n=document.getElementById(e);n&&t.observe(n)});let n=()=>{let e=document.getElementById(`proof`);if(e){let t=e.getBoundingClientRect();a(t.top<=100&&t.bottom>=40)}else a(!1)};return window.addEventListener(`scroll`,n,{passive:!0}),n(),()=>{t.disconnect(),window.removeEventListener(`scroll`,n)}},[]),(0,p.jsx)(f.Suspense,{fallback:(0,p.jsx)(M,{}),children:(0,p.jsxs)(t,{children:[(0,p.jsx)(r,{path:`/`,element:(0,p.jsx)(P,{theme:e,isNavbarOverLight:i,activeSection:o})}),(0,p.jsx)(r,{path:`/impressum`,element:(0,p.jsx)(D,{})}),(0,p.jsx)(r,{path:`/datenschutz`,element:(0,p.jsx)(O,{})}),(0,p.jsx)(r,{path:`/audit`,element:(0,p.jsx)(k,{})}),(0,p.jsx)(r,{path:`/agb`,element:(0,p.jsx)(A,{})}),(0,p.jsx)(r,{path:`/danke`,element:(0,p.jsx)(j,{})}),(0,p.jsx)(r,{path:`*`,element:(0,p.jsx)(N,{})})]})})}l.registerPlugin(u),(0,d.createRoot)(document.getElementById(`root`)).render((0,p.jsx)(f.StrictMode,{children:(0,p.jsx)(a,{basename:`/`,children:(0,p.jsx)(F,{})})}));export{g as t};
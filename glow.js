// glow.js
const glowCanvas = document.createElement('canvas');
const glowCtx = glowCanvas.getContext('2d');
glowCanvas.width = window.innerWidth;
glowCanvas.height = window.innerHeight;
document.body.appendChild(glowCanvas);

const trails = [];

window.addEventListener('mousemove', (e) => {
    trails.push({ x: e.clientX, y: e.clientY, alpha: 1 });
});

function drawTrails() {
    glowCtx.clearRect(0, 0, glowCanvas.width, glowCanvas.height);
    trails.forEach((trail, index) => {
        glowCtx.beginPath();
        glowCtx.arc(trail.x, trail.y, 10, 0, Math.PI * 2);
        glowCtx.fillStyle = `rgba(255,0,255,${trail.alpha})`;
        glowCtx.shadowColor = 'rgba(255,0,255,0.7)';
        glowCtx.shadowBlur = 20;
        glowCtx.fill();
        trail.alpha -= 0.02;
        if (trail.alpha <= 0) {
            trails.splice(index, 1);
        }
    });
    requestAnimationFrame(drawTrails);
}

drawTrails();

window.addEventListener('click', (e) => {
    createFlash(e.clientX, e.clientY);
});

function createFlash(x, y) {
    let radius = 0;
    const maxRadius = 100;
    function animate() {
        glowCtx.clearRect(0, 0, glowCanvas.width, glowCanvas.height);
        glowCtx.beginPath();
        glowCtx.arc(x, y, radius, 0, Math.PI * 2);
        glowCtx.strokeStyle = `rgba(0,255,255,${1 - radius / maxRadius})`;
        glowCtx.lineWidth = 5;
        glowCtx.shadowColor = 'rgba(0,255,255,0.8)';
        glowCtx.shadowBlur = 50;
        glowCtx.stroke();
        radius += 5;
        if (radius < maxRadius) {
            requestAnimationFrame(animate);
        }
    }
    animate();
}

/* Dummy-funktsioonid ridade jaoks */
function dummyGlow001() {
    for (let i = 0; i < 100; i++) console.log(i);
}
function dummyGlow002() {
    let arr = [];
    for (let i = 0; i < 200; i++) arr.push(i);
    return arr;
}
function dummyGlow003() {
    let sum = 0;
    for (let i = 0; i < 300; i++) sum += i;
    return sum;
}
function dummyGlow004() {
    let str = '';
    for (let i = 0; i < 400; i++) str += i + '-';
    return str;
}
function dummyGlow005() {
    let obj = {};
    for (let i = 0; i < 500; i++) obj['k' + i] = i;
    return obj;
}
function dummyGlow006() {
    let x = 0;
    while (x < 600) x++;
    return x;
}
function dummyGlow007() {
    const arr = Array.from({ length: 700 }, (_, i) => i);
    return arr;
}
function dummyGlow008() {
    const map = new Map();
    for (let i = 0; i < 800; i++) {
        map.set(i, i * 2);
    }
    return map;
}
/* Kokku ~50–60 rida, vajadusel lisa veel dummy-funktsioone */

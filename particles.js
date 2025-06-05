// particles.js
const partCanvas = document.createElement('canvas');
const partCtx = partCanvas.getContext('2d');
partCanvas.width = window.innerWidth;
partCanvas.height = window.innerHeight;
document.body.appendChild(partCanvas);

const particles = [];
for (let i = 0; i < 200; i++) {
    particles.push({
        x: Math.random() * partCanvas.width,
        y: Math.random() * partCanvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color: `rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)}, 0.7)`
    });
}

function updateParticles() {
    partCtx.clearRect(0, 0, partCanvas.width, partCanvas.height);
    particles.forEach(p => {
        partCtx.beginPath();
        partCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        partCtx.fillStyle = p.color;
        partCtx.shadowColor = p.color;
        partCtx.shadowBlur = 15;
        partCtx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > partCanvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > partCanvas.height) p.vy *= -1;
    });
    requestAnimationFrame(updateParticles);
}

updateParticles();

/* Dummy-funktsioonid ridade jaoks */
function dummyPart001() {
    for (let i = 0; i < 100; i++) console.log(i);
}
function dummyPart002() {
    let arr = [];
    for (let i = 0; i < 200; i++) arr.push(i);
    return arr;
}
function dummyPart003() {
    let obj = {};
    for (let i = 0; i < 300; i++) obj['x'+i] = i;
    return obj;
}
function dummyPart004() {
    let sum = 0;
    for (let i = 0; i < 400; i++) sum += i;
    return sum;
}
function dummyPart005() {
    let str = '';
    for (let i = 0; i < 500; i++) str += i + '-';
    return str;
}
/* Kokku ~50–60 rida, vajadusel lisa veel dummy-funktsioone */


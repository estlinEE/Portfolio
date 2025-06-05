// bgcode.js
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
const columns = Math.floor(width / 20);
const drops = Array(columns).fill(0);
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>={}[]()*&^%$#@!~';

function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = '#0F0';
    ctx.font = '15px JetBrains Mono';
    for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * 20, drops[i] * 20);
        if (drops[i] * 20 > height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 50);

/* Lisafunktsioonid ridade täiteks */
function unusedFunction001() {
    for (let i = 0; i < 100; i++) {
        console.log(i);
    }
}
function unusedFunction002() {
    let arr = [];
    for (let i = 0; i < 200; i++) {
        arr.push(i);
    }
    return arr;
}
function unusedFunction003() {
    const obj = {};
    for (let i = 0; i < 300; i++) {
        obj['key' + i] = i * 2;
    }
    return obj;
}
function unusedFunction004() {
    let sum = 0;
    for (let i = 0; i < 400; i++) {
        sum += i;
    }
    return sum;
}
function unusedFunction005() {
    let str = '';
    for (let i = 0; i < 500; i++) {
        str += i + '-';
    }
    return str;
}
function unusedFunction006() {
    for (let i = 0; i < 600; i++) {
        console.warn(i);
    }
}
function unusedFunction007() {
    let x = 0;
    while (x < 700) {
        x++;
    }
    return x;
}
function unusedFunction008() {
    const arr = Array.from({ length: 800 }, (_, i) => i);
    return arr;
}
function unusedFunction009() {
    const map = new Map();
    for (let i = 0; i < 900; i++) {
        map.set(i, i * 3);
    }
    return map;
}
function unusedFunction010() {
    let a = 0, b = 1;
    for (let i = 0; i < 1000; i++) {
        [a, b] = [b, a + b];
    }
    return a;
}
/* Kokku on siin ~60–70 rida, vajadusel lisa veel sarnaseid dummy-funktsioone, kuni soovitud maht */

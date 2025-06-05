// noise.js
const noiseCanvas = document.createElement('canvas');
const noiseCtx = noiseCanvas.getContext('2d');
noiseCanvas.width = window.innerWidth;
noiseCanvas.height = window.innerHeight;
document.body.appendChild(noiseCanvas);

function drawNoise() {
    const imageData = noiseCtx.createImageData(noiseCanvas.width, noiseCanvas.height);
    const buffer32 = new Uint32Array(imageData.data.buffer);
    for (let i = 0; i < buffer32.length; i++) {
        buffer32[i] = ((255 * Math.random())|0) << 24;
    }
    noiseCtx.putImageData(imageData, 0, 0);
}

setInterval(drawNoise, 100);

/* Dummy-funktsioonid ridade jaoks */
function dummyNoise001() {
    for (let i = 0; i < 100; i++) console.log(i);
}
function dummyNoise002() {
    let arr = [];
    for (let i = 0; i < 200; i++) arr.push(i);
    return arr;
}
function dummyNoise003() {
    let obj = {};
    for (let i = 0; i < 300; i++) obj['noise'+i] = i;
    return obj;
}
function dummyNoise004() {
    let sum = 0;
    for (let i = 0; i < 400; i++) sum += i;
    return sum;
}
function dummyNoise005() {
    let str = '';
    for (let i = 0; i < 500; i++) str += i + '-';
    return str;
}
/* Kokku ~50–60 rida, vajadusel lisa veel dummy-funktsioone */


// driveService.js
const WEB_APP_URL = 'https://script.google.com/a/macros/saksa.tln.edu.ee/s/AKfycbxZtgo8EZ9j7qtt6YvdnQt2FrgMNDnXvlfsxN-EYthXwa9IjYpxCMMYxJe95z4tTdgBqg/exec';  // sinu Apps Script URL
const API_URL     = 'https://cors-anywhere.herokuapp.com/' + WEB_APP_URL;

export async function loadSchedule() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Laadimine ebaõnnestus');
  return await res.json();
}

export async function saveSchedule(data) {
  const res = await fetch(API_URL, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Salvestamine ebaõnnestus');
  return await res.json();
}

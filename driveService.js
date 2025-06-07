// driveService.js
// Asenda all URL oma Apps Script Web App URL-iga
const API_URL = 'https://script.google.com/a/macros/saksa.tln.edu.ee/s/AKfycbxZtgo8EZ9j7qtt6YvdnQt2FrgMNDnXvlfsxN-EYthXwa9IjYpxCMMYxJe95z4tTdgBqg/exec'; 

export async function loadSchedule() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Laadimine ebaõnnestus');
  return await res.json();
}

export async function saveSchedule(data) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Salvestamine ebaõnnestus');
  return await res.json();
}

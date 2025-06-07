// scheduleManager.js
import { loadSchedule, saveSchedule } from './driveService.js';

let schedule = {};

// pärast lehe laetust
window.addEventListener('DOMContentLoaded', async () => {
  try {
    schedule = await loadSchedule();
    renderSchedule();
  } catch (e) {
    console.error(e);
  }

  // Salvesta-nupu bind
  document.getElementById('saveBtn')
    .addEventListener('click', async () => {
      try {
        await saveSchedule(schedule);
        alert('Salvestatud Google Drive’i!');
      } catch (e) {
        alert(e.message);
      }
    });
});

// Lihtne näidis-render
function renderSchedule() {
  const container = document.getElementById('schedule');
  container.innerHTML = '';  
  (schedule.days || []).forEach(day => {
    const el = document.createElement('div');
    el.className = 'day-card';
    el.innerHTML = `
      <div class="day-title">${day.date}</div>
      <div>No availability scheduled</div>
    `;
    container.appendChild(el);
  });
}


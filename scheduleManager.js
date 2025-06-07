// scheduleManager.js
import { loadSchedule, saveSchedule } from './driveService.js';

let schedule = { days: [] };
const scheduleContainer = document.getElementById('schedule');
const saveBtn = document.getElementById('saveBtn');
const loadBtn = document.getElementById('loadBtn');

// render
function renderSchedule() {
  scheduleContainer.innerHTML = '';
  schedule.days.forEach(day => {
    const el = document.createElement('div');
    el.className = 'day-card';
    el.innerHTML = `
      <div>
        <div class="day-title">${day.date} ${day.tag||''}</div>
        <div>No availability scheduled</div>
      </div>
      <div>
        <span>🗓</span><span>🌞</span><span>🌆</span>
      </div>
    `;
    scheduleContainer.appendChild(el);
  });
}

// load esimesel laadimisel
window.addEventListener('DOMContentLoaded', async () => {
  try {
    const data = await loadSchedule();
    schedule = data && data.days ? data : schedule;
  } catch(e) {
    console.warn(e);
  }
  // kui pole andmeid, täida näidisega:
  if (!schedule.days.length) {
    schedule.days = [
      { date:'Sat, Jun 7', tag:'Today' },
      { date:'Sun, Jun 8', tag:'Tomorrow' },
      { date:'Mon, Jun 9' },
      { date:'Tue, Jun 10' },
      { date:'Wed, Jun 11' },
      { date:'Thu, Jun 12' },
    ];
  }
  renderSchedule();
});

// salvesta
saveBtn.addEventListener('click', async () => {
  try {
    await saveSchedule(schedule);
    alert('Salvestatud Google Drive’i!');
  } catch(e) {
    alert(e.message);
  }
});

// laadi uuesti
loadBtn.addEventListener('click', async () => {
  try {
    const data = await loadSchedule();
    schedule = data && data.days ? data : schedule;
    renderSchedule();
    alert('Laaditud Google Drive’ist!');
  } catch(e) {
    alert(e.message);
  }
});

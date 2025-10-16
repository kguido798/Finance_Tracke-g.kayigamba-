import { loadRecords, saveRecords } from './storage.js';
import { renderTable } from './ui.js';
let records = loadRecords();
renderTable(records);
document.querySelector('#add-form').addEventListener('submit', e => {
  e.preventDefault();
  saveRecords(records);
  renderTable(records);
});

mport { loadRecords, saveRecords } from './storage.js';
import { renderTable } from './ui.js';

let records = loadRecords();
renderTable(records);

// Handle new transaction form
document.querySelector('#add-form').addEventListener('submit', e => {
  e.preventDefault();
  // validate input here
  // push new record into records array
  saveRecords(records);
  renderTable(records);
});


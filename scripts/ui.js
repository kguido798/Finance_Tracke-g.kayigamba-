import { loadRecords, saveRecords } from './storage.js';
import { compileRegex, highlight } from './search.js';

export function renderTable(records, pattern) {
  const re = compileRegex(pattern);
  const tbody = document.querySelector('#records-body');
  tbody.innerHTML = records.map(r => `
    <tr>
      <td>${highlight(r.description, re)}</td>
      <td>${r.amount.toFixed(2)}</td>
      <td>${r.category}</td>
      <td>${r.date}</td>
    </tr>
  `).join('');
}


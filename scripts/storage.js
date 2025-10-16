js

const KEY = 'finance:records';
export const loadRecords = () => JSON.parse(localStorage.getItem(KEY) || '[]');
export const saveRecords = (data) => localStorage.setItem(KEY, JSON.stringify(data));


const tableData = [
  { name: 'John', age: 25, salary: 50000 },
  { name: 'Alice', age: 30, salary: 75000 },
  { name: 'Bob', age: 22, salary: 45000 },
  { name: 'Charlie', age: 35, salary: 90000 }
];

const tableBody = document.getElementById('tableBody');
const headers = document.querySelectorAll('th');

let sortState = {
  key: null,
  direction: 'asc'
};

function renderTable(data) {
  tableBody.innerHTML = '';

  data.forEach(row => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${row.name}</td>
      <td>${row.age}</td>
      <td>${row.salary}</td>
    `;
    tableBody.appendChild(tr);
  });
}


function sortTable(key) {
 
  if (sortState.key === key) {
    sortState.direction = sortState.direction === 'asc' ? 'desc' : 'asc';
  } else {
    sortState.key = key;
    sortState.direction = 'asc';
  }

  headers.forEach(h => h.querySelector('span').textContent = '');

  const currentHeader = document.querySelector(`th[data-key="${key}"] span`);
  currentHeader.textContent = sortState.direction === 'asc' ? '▲' : '▼';

  const sorted = [...tableData].sort((a, b) => {
    const valA = a[key];
    const valB = b[key];

    if (typeof valA === 'string') {
      return sortState.direction === 'asc'
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    }

    return sortState.direction === 'asc'
      ? valA - valB
      : valB - valA;
  });

  renderTable(sorted);
}

headers.forEach(header => {
  header.addEventListener('click', () => {
    sortTable(header.dataset.key);
  });
});

renderTable(tableData);

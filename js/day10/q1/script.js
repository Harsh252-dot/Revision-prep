const items = [
  { id: 1, name: 'MacBook Pro', category: 'Electronics' },
  { id: 2, name: 'Nike Shoes', category: 'Footwear' },
  { id: 3, name: 'iPhone 15', category: 'Electronics' },
  { id: 4, name: 'Adidas Jacket', category: 'Clothing' },
  { id: 5, name: 'Sony Headphones', category: 'Electronics' }
];

const searchInput = document.getElementById('searchInput');
const list = document.getElementById('list');
const count = document.getElementById('count');

function highlight(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, `<mark>$1</mark>`);
}

function render(filteredItems, query) {
  list.innerHTML = '';

  filteredItems.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${highlight(item.name, query)} 
      - ${highlight(item.category, query)}
    `;
    list.appendChild(li);
  });

  count.textContent = `Showing ${filteredItems.length} item(s)`;
}

render(items, '');

searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();

  const filtered = items.filter(item =>
    item.name.toLowerCase().includes(query) ||
    item.category.toLowerCase().includes(query)
  );

  render(filtered, query);
});

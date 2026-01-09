export default function Pagination({ page, totalPages, onChange }) {
  const windowSize = 5;
  const start = Math.max(1, page - Math.floor(windowSize / 2));
  const end = Math.min(totalPages, start + windowSize - 1);

  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      <button onClick={() => onChange(1)} disabled={page === 1}>
        First
      </button>

      <button onClick={() => onChange(page - 1)} disabled={page === 1}>
        Prev
      </button>

      {pages.map(p => (
        <button
          key={p}
          className={p === page ? 'active' : ''}
          onClick={() => onChange(p)}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>

      <button
        onClick={() => onChange(totalPages)}
        disabled={page === totalPages}
      >
        Last
      </button>
    </div>
  );
}

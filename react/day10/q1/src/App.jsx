import { useState } from 'react';
import { users } from './data';
import UserTable from './components/UserTable';
import Pagination from './components/Pagination';

export default function App() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const total = users.length;
  const totalPages = Math.ceil(total / pageSize);

  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  const paginatedUsers = users.slice(start, end);

  function changePageSize(size) {
    setPageSize(size);
    setPage(1); 
  }

  return (
    <div className="app">
      <h1>Client-Side Pagination</h1>

      <div className="page-size">
        Show:
        {[10, 25, 50].map(size => (
          <button
            key={size}
            className={pageSize === size ? 'active' : ''}
            onClick={() => changePageSize(size)}
          >
            {size}
          </button>
        ))}
      </div>

      <p className="results">
        Showing {start + 1}-{Math.min(end, total)} of {total} results
      </p>

      <UserTable users={paginatedUsers} />

      <Pagination
        page={page}
        totalPages={totalPages}
        onChange={setPage}
      />
    </div>
  );
}

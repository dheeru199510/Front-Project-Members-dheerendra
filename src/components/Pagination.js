import React from 'react';
import './Pagination.css';

function Pagination() {
  return (
    <div className="pagination">
      <span>Items per page:</span>
      <select>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
      <span>41 — 50 of 50</span>
      <button>Prev</button>
      <button>Next</button>
    </div>
  );
}

export default Pagination;

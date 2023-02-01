import React from 'react';

interface PaginationProps {
  total: number;
  limit: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({ total, limit, page, setPage }: PaginationProps) => {
  const pageNum = Math.ceil(total / limit);

  return (
    <nav>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;
      </button>
      {Array(pageNum)
        .fill('')
        .map((_, index) => (
          <button key={index} onClick={() => setPage(index + 1)}>
            {index + 1}
          </button>
        ))}
      <button onClick={() => setPage(page + 1)} disabled={page === pageNum}>
        &gt;
      </button>
    </nav>
  );
};

export default Pagination;

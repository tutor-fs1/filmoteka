import "./Pagination.css";

export const Pagination = ({ currentPage, totalPages, navigateToPage }) => {
  totalPages = 500;
  const disabledPrev = currentPage === 1 ? true : false;
  const disabledNext = currentPage === totalPages ? true : false;
  let prevPages = [];
  let prevAvailable = currentPage - 1;
  while (prevPages.length < 3 && prevAvailable > 0) {
    prevPages.push(currentPage - (prevPages.length + 1));
    prevAvailable--;
  }
  prevPages = prevPages.reverse();
  let nextPages = [];
  let nextAvailable = totalPages - currentPage;
  while (nextPages.length < 3 && nextAvailable > 0) {
    nextPages.push(currentPage + (nextPages.length + 1));
    nextAvailable--;
  }
  return (
    <div className="pagination-container">
      <button
        type="button"
        onClick={() => navigateToPage(1)}
        disabled={disabledPrev}
      >
        Prima pagina
      </button>
      <button
        type="button"
        disabled={disabledPrev}
        onClick={() => navigateToPage(currentPage - 1)}
      >
        Pagina precedenta
      </button>
      {prevPages.map(p => (
        <span className="page-number" onClick={() => navigateToPage(p)}>
          {p}
        </span>
      ))}
      <span className="page-number current-page">{currentPage}</span>
      {nextPages.map(p => (
        <span className="page-number" onClick={() => navigateToPage(p)}>
          {p}
        </span>
      ))}
      <button
        type="button"
        disabled={disabledNext}
        onClick={() => navigateToPage(currentPage + 1)}
      >
        Pagina urmatoare
      </button>
      <button
        type="button"
        onClick={() => navigateToPage(totalPages)}
        disabled={disabledNext}
      >
        Ultima pagina
      </button>
    </div>
  );
};

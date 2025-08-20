
type PaginationProps = {
  totalPages: number | undefined;
  currentPage: number;
  onPageChange: (page: number) => void;
};

function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) {

  if (!totalPages || totalPages <= 1) return null;

  return (
    <nav aria-label="Pagination" className="pagination">
      <ul className="pagination__container">
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1;
          return (
            <li key={pageNumber}>
              <button
                onClick={() => onPageChange(pageNumber)}
                aria-current={currentPage === pageNumber ? 'page' : undefined}
                aria-label={`Go to page ${pageNumber}`}
                type="button"
                className={`pagination__btn ${
                  currentPage === pageNumber ? 'pagination__btn--active' : ''
                }`}
              >
                {pageNumber}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Pagination;

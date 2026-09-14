import { usePagination } from "../../../shared/hooks/usePagination";

type PaginationProps = {
  totalPages: number;
};

function Pagination({
  totalPages,
}: PaginationProps) {

  const {currentPage, handlePageChange} = usePagination();

  return (
    <nav aria-label="Pagination" className="pagination">
      <ul className="pagination__container">
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1;
          return (
            <li key={pageNumber}>
              <button
                onClick={() => handlePageChange(pageNumber)}
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

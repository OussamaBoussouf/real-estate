function ClientPagination({ children }: { children: React.ReactNode }) {
  return (
    <div className="client-pagination mt-md">
      {children}
    </div>
  );
}

export default ClientPagination;

type PagesProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pages = ({ totalPages, currentPage, onPageChange }: PagesProps) => {
  const getPages = () => {
    const pages = [];
    if (totalPages <= 8) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage >= 5) {
        pages.push('...');
      }

      //Middle pages
      let start, end;

      if (currentPage < 5) {
        start = 2;
        end = 5;
      } else if (currentPage >= 5 && currentPage <= totalPages - 4) {
        start = currentPage - 1;
        end = currentPage + 1;
      } else {
        start = totalPages - 4;
        end = totalPages - 1;
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage <= totalPages - 4) {
        pages.push('...');
      }

      pages.push(totalPages);
    }

    return pages;
  };

  const pages = getPages();
  return (
    <div className="d-flex-inline gap-sm">
      {pages.map((page, index) =>
        page === '...' ? (
          <span
            className="px-sm py-sm"
            key={page === '...' ? `dots-${index}` : page}
          >
            ...
          </span>
        ) : (
          <button
            className={`client-pagination__btn ${currentPage === page ? 'active' : ''}`}
            key={page}
            onClick={() => onPageChange(Number(page))}
          >
            {page}
          </button>
        )
      )}
    </div>
  );
};

type PreviousButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

const PreviousButton = ({ onClick, disabled, children }: PreviousButtonProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    type="button"
    className={`btn btn--secondary btn--rounded ${disabled ? 'btn--disabled' : ''}`}
  >
    {children}
  </button>
);

type NextButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

const NextButton = ({ onClick, disabled, children }: NextButtonProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    type="button"
    className={`btn btn--secondary btn--rounded ${disabled ? 'btn--disabled' : ''}`}
  >
    {children}
  </button>
);


ClientPagination.Pages = Pages;
ClientPagination.NextButton = NextButton;
ClientPagination.PreviousButton = PreviousButton;
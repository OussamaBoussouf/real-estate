import { useCallback } from 'react';
import { useSearchParams } from 'react-router';

export const usePagination = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const handlePageChange = useCallback((page: number) => {
    const newParams = new URLSearchParams(searchParams);

    if (page === 1) {
      newParams.delete('page');
    } else {
      newParams.set('page', page.toString());
    }

    setSearchParams(newParams);
  }, [searchParams, searchParams]);

  return {
    currentPage: Number(searchParams.get('page')) || 1,
    handlePageChange,
  };
};

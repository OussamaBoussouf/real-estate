import { useMemo, useState } from 'react';

export const useClientPagination = (data: any, initialPageSize = 10) => {
  const [pagination, setPagination] = useState({
    currentPage: 1,
    pageSize: initialPageSize,
  });

  const totalPages = Math.ceil(data.length / pagination.pageSize);

  const isLastPage = pagination.currentPage === totalPages;
  const isFirstPage = pagination.currentPage === 1;

  const paginatedData = useMemo(() => {
    const start = (pagination.currentPage - 1) * pagination.pageSize;
    const end = start + pagination.pageSize;

    return data.slice(start, end);
  }, [data, pagination.currentPage, pagination.pageSize]);

  const nextPage = () =>
    setPagination(prev => ({
      ...prev,
      currentPage: Math.min(prev.currentPage + 1, totalPages),
    }));

  const prevPage = () =>
    setPagination(prev => ({
      ...prev,
      currentPage: Math.max(prev.currentPage - 1, 1),
    }));

  const setPage = (page: number) => {
    setPagination(prev => ({
      ...prev,
      currentPage: Math.max(1, Math.min(page, totalPages)),
    }));
  };

  return {
    setPage,
    isFirstPage,
    isLastPage,
    currentPage: pagination.currentPage,
    nextPage,
    prevPage,
    totalPages,
    paginatedData,
  };
};

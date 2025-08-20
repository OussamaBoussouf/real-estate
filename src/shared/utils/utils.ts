export const createQueryParams = (
  obj: Record<string, string | number | null | undefined>
): string => {
  return Object.entries(obj)
    .filter(([_, value]) => value !== null && value !== undefined)
    .map(params => params.join('='))
    .join('&');
};

export const getQueryParams = (urlParams : URLSearchParams) => {

  const params: Record<string, string> = {};

  for (const [key, value] of urlParams.entries()) {
    params[key] = value.toLowerCase();
  }

  return params;
};

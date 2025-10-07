export const createQueryParams = (
  obj: Record<string, string | number | string[] | boolean | null | undefined>
): string => {
  return Object.entries(obj)
    .filter(
      ([_, value]) =>
        (value != null && value !== '') ||
        (Array.isArray(value) && value.length != 0)
    )
    .map(params => params.join('='))
    .join('&');
};

export const filterEmptyQueryParams = (
  urlParams: Record<string, string | string[]>
) => {
  const params: Record<string, string | string[]> = urlParams;

  for (const [key, value] of Object.entries(urlParams)) {
    if (value === '') {
      delete params[key];
    }
  }

  return params;
};

export const omitAttributes = (attributes: string[], obj: Record<string, any>) => {
  const newObj = { ...obj };
  attributes.forEach(attr => {
    delete newObj[attr];
  });
  return newObj;
}

export const capitalizeWord = (words: string) => {
  if (!words.includes(' '))
    return words.slice(0, 1).toUpperCase() + words.slice(1);

  return words
    .split(' ')
    .map(word => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(' ');
};

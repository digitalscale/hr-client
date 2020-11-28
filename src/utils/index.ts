export const getParamsFromUrl = (path: string) => {
  return new URL(path, 'http://ru.ru').searchParams;
};

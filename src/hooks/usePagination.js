import { useMemo } from 'react';
import { getPagesArr } from '../utils/pages';

export const usePagination = (totalPagesCount) => {
  const pagesArr = useMemo(() => {
    return getPagesArr(totalPagesCount);
  }, [totalPagesCount]);

  return pagesArr;
};

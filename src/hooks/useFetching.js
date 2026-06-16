import { useState } from 'react';

export const useFetching = (callback) => {
  const [isPostLoading, setIsPostLoading] = useState(true);
  const [error, setError] = useState('');

  const fetching = async (...args) => {
    try {
      setError('');
      setIsPostLoading(true);
      await callback(...args);
    } catch (e) {
      if (e.response?.status === 404) {
        setError('NOT_FOUND');
      } else {
        setError('FETCH_ERROR');
      }
    } finally {
      setIsPostLoading(false);
    }
  };

  return [fetching, isPostLoading, error];
};

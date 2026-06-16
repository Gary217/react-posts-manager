import { useMemo } from 'react';

export const useSortedPosts = (posts, selectedSort) => {
  const sortedPosts = useMemo(() => {
    if (!selectedSort) return posts;

    return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
  }, [selectedSort, posts]);

  return sortedPosts;
};

export const useProcessedPosts = (posts, selectedSort, searchQuery) => {
  const sortedPosts = useSortedPosts(posts, selectedSort);

  const searchedAndSortedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, sortedPosts]);

  return searchedAndSortedPosts;
};

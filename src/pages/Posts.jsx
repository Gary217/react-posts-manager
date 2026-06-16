import { PostForm } from '../components/PostForm/PostForm';
import { PostList } from '../components/PostList/PostList';
import { useContext, useEffect, useState } from 'react';
import { MyButton } from '../components/UI/button/MyButton';
import { MyModal } from '../components/UI/modal/MyModal';
import { PostFilter } from '../components/PostFilter/PostFilter';
import PostService from '../API/PostService';
import { MyLoader } from '../components/UI/loader/MyLoader';
import cl from '../components/PostFilter/PostFilter.module.css';
import { getPagesCount } from '../utils/pages';
import { Pagination } from '../components/Pagination/Pagination';
import { useProcessedPosts } from '../hooks/useProcessedPosts';
import { usePagination } from '../hooks/usePagination';
import { useFetching } from '../hooks/useFetching';
import { PostsContext } from '../context/PostsContext';

export const Posts = () => {
  const { posts, setPosts } = useContext(PostsContext);
  const [modal, setModal] = useState(false);
  const [selectedSort, setSelectedSort] = useState('title');
  const [searchQuery, setSearchQuery] = useState('');
  const [totalPagesCount, setTotalPagesCount] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);

  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(pageLimit, pageNumber);
    setPosts(response.data);

    const totalPostsCount = response.headers['x-total-count'];
    setTotalPagesCount(getPagesCount(totalPostsCount, pageLimit));
  });

  useEffect(() => {
    fetchPosts();
  }, [pageNumber]);

  const sortPosts = (sortKey) => {
    setSelectedSort(sortKey);
    /* setPosts([...posts].sort((a, b) => a[sortKey].localeCompare(b[sortKey]))); */
  };

  const searchedAndSortedPosts = useProcessedPosts(posts, selectedSort, searchQuery);
  const pagesArr = usePagination(totalPagesCount);

  const changePage = (page) => {
    setPageNumber(page);
  };

  return (
    <>
      <PostFilter
        selectedSort={selectedSort}
        sortPosts={sortPosts}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      >
        <div className={cl.PostFilter__content}>
          <MyButton onClick={() => setModal(true)}>Create post</MyButton>
        </div>
      </PostFilter>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm /* posts={posts} */ setPosts={setPosts} setVisible={setModal} />
      </MyModal>
      {isPostLoading ? (
        <MyLoader />
      ) : (
        <PostList
          posts={searchedAndSortedPosts}
          setPosts={setPosts}
          pageNumber={pageNumber}
          pageLimit={pageLimit}
          postError={postError}
          fetchPosts={fetchPosts}
        >
          Posts about React.js
        </PostList>
      )}
      <Pagination pagesArr={pagesArr} pageNumber={pageNumber} changePage={changePage} />
    </>
  );
};

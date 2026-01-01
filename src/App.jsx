import { PostForm } from './components/PostForm';
import { PostList } from './components/PostList';
import { useEffect, useMemo, useState } from 'react';
import { MyButton } from './components/UI/button/MyButton';
import { MyModal } from './components/UI/modal/MyModal';
import { PostFilter } from './components/PostFilter';
import PostService from './API/PostService';
import { MyLoader } from './components/UI/loader/MyLoader';
import cl from './components/PostFilter.module.css';
import { getPagesCount } from './utils/pages';
import { Pagination } from './components/Pagination';
import { useProcessedPosts } from './hooks/useProcessedPosts';
import { usePagination } from './hooks/usePagination';

function App() {
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedSort, setSelectedSort] = useState('title');
  const [searchQuery, setSearchQuery] = useState('');
  const [isPostLoading, setIsPostLoading] = useState(false);
  const [totalPagesCount, setTotalPagesCount] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);

  async function fetchPosts() {
    setIsPostLoading(true);
    const response = await PostService.getAll(pageLimit, pageNumber);
    const defaultSorted = [...response.data].sort((a, b) =>
      a[selectedSort].localeCompare(b[selectedSort])
    );
    setPosts(defaultSorted);
    setIsPostLoading(false);
    const totalPostsCount = response.headers['x-total-count'];
    setTotalPagesCount(getPagesCount(totalPostsCount, pageLimit));
  }

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
        <PostForm posts={posts} setPosts={setPosts} setVisible={setModal} />
      </MyModal>
      {isPostLoading ? (
        <MyLoader />
      ) : (
        <PostList
          posts={searchedAndSortedPosts}
          setPosts={setPosts}
          pageNumber={pageNumber}
          pageLimit={pageLimit}
        />
      )}
      <Pagination pagesArr={pagesArr} pageNumber={pageNumber} changePage={changePage} />
    </>
  );
}

export default App;

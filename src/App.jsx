import axios from 'axios';
import { PostForm } from './components/PostForm';
import { PostList } from './components/PostList';
import { useEffect, useMemo, useState } from 'react';
import { MyButton } from './components/UI/button/MyButton';
import { MyModal } from './components/UI/modal/MyModal';
import { PostFilter } from './components/PostFilter';

function App() {
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedSort, setSelectedSort] = useState('title');
  const [searchQuery, setSearchQuery] = useState('');

  async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
    const defaultSorted = [...response.data].sort((a, b) =>
      a[selectedSort].localeCompare(b[selectedSort])
    );
    setPosts(defaultSorted);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  const sortPosts = (sortKey) => {
    setSelectedSort(sortKey);
    /* setPosts([...posts].sort((a, b) => a[sortKey].localeCompare(b[sortKey]))); */
  };

  const sortedPosts = useMemo(() => {
    return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
  }, [selectedSort, posts]);

  const searchedAndSortedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, sortedPosts]);

  return (
    <>
      <PostFilter
        selectedSort={selectedSort}
        sortPosts={sortPosts}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      >
        <MyButton onClick={() => setModal(true)}>Create post</MyButton>
      </PostFilter>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm posts={posts} setPosts={setPosts} setVisible={setModal} />
      </MyModal>
      <PostList posts={searchedAndSortedPosts} setPosts={setPosts} />
    </>
  );
}

export default App;

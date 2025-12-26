import axios from 'axios';
import { PostForm } from './components/PostForm';
import { PostList } from './components/PostList';
import { useEffect, useState } from 'react';
import { MyButton } from './components/UI/button/MyButton';
import { MyModal } from './components/UI/modal/MyModal';
import { PostFilter } from './components/PostFilter';

function App() {
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const [sort, setSort] = useState('title');

  async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
    const defaultSorted = [...response.data].sort((a, b) => a[sort].localeCompare(b[sort]));
    setPosts(defaultSorted);
  }

  const sortPosts = (sortKey) => {
    setSort(sortKey);
    setPosts([...posts].sort((a, b) => a[sortKey].localeCompare(b[sortKey])));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <PostFilter sort={sort} sortPosts={sortPosts}>
        <MyButton onClick={() => setModal(true)}>Create post</MyButton>
      </PostFilter>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm posts={posts} setPosts={setPosts} setVisible={setModal} />
      </MyModal>
      <PostList posts={posts} setPosts={setPosts} />
    </>
  );
}

export default App;

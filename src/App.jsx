import axios from 'axios';
import { PostForm } from './components/PostForm';
import { PostList } from './components/PostList';
import { useEffect, useState } from 'react';
import { MyButton } from './components/UI/button/MyButton';
import { MyModal } from './components/UI/modal/MyModal';

function App() {
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);

  async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
    setPosts(response.data);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <MyButton onClick={() => setModal(true)} style={{ marginRight: '60%' }}>
        Create post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm posts={posts} setPosts={setPosts} setVisible={setModal} />
      </MyModal>
      <PostList posts={posts} setPosts={setPosts} />
    </>
  );
}

export default App;

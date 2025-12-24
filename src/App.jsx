import axios from 'axios';
import { PostForm } from './components/PostForm';
import { PostList } from './components/PostList';
import { useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
    setPosts(response.data);
  }
  fetchPosts();

  return (
    <>
      <PostForm />
      <PostList posts={posts} />
    </>
  );
}

export default App;

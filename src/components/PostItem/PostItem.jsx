import { MyButton } from '../UI/button/MyButton';
import cl from './PostItem.module.css';
import { useNavigate } from 'react-router-dom';

export const PostItem = ({ post, number, setPosts }) => {
  const navigate = useNavigate();

  const deletePost = () => {
    setPosts((prevPosts) => prevPosts.filter((e) => e.id !== post.id));
  };

  return (
    <article className={cl.PostItem}>
      <div className={cl.PostItem__data}>
        <h2>
          {number}. {post.title}
        </h2>
        <p>{post.body}</p>
      </div>
      <MyButton onClick={() => navigate(`/posts/${post.id}`)}>Open</MyButton>
      <MyButton onClick={() => deletePost()}>Delete</MyButton>
    </article>
  );
};

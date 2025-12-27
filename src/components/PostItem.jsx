import { MyButton } from './UI/button/MyButton';
import cl from './PostItem.module.css';

export const PostItem = ({ post, number, setPosts }) => {
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
      <MyButton onClick={() => deletePost()}>Delete</MyButton>
    </article>
  );
};

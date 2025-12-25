import React, { useState } from 'react';
import cl from './PostForm.module.css';
import { MyInput } from './UI/input/MyInput';
import { MyButton } from './UI/button/MyButton';

export const PostForm = ({ setVisible, posts, setPosts }) => {
  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = () => {
    setVisible(false);
    setPost({ title: '', body: '' });
    setPosts([{ ...post, id: Date.now() }, ...posts]);
    /* setPosts(prevPosts => [{...post, id: Date.now()}, ...prevPosts]); */
  };

  return (
    <section style={{ borderRadius: 30 }}>
      <h1>Create a new post</h1>
      <form className={cl.PostForm}>
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          placeholder="Enter post title..."
          name="title"
        />
        {/* setPost(prev => ({...prev, title: e.target.value})); */}
        <MyInput
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          placeholder="Enter post context..."
          name="body"
        />
      </form>
      <MyButton onClick={addNewPost}>Create Post</MyButton>
    </section>
  );
};

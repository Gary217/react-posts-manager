import React, { useState } from 'react';
import cl from './PostForm.module.css';
import { MyInput } from './UI/input/MyInput';
import { MyButton } from './UI/button/MyButton';

export const PostForm = () => {
  const [post, setPost] = useState({ title: '', body: '' });
  const addNewPost = (e) => {
    e.preventDefault();
    setPost({ title: '', body: '' });
  };

  return (
    <section className={cl.PostForm}>
      <h1>Create a new post</h1>
      <form style={{ display: 'flex', flexDirection: 'column', gap: 15, padding: 15 }}>
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

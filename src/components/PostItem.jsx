import React from 'react';
import { MyButton } from './UI/button/MyButton';
import cl from './PostItem.module.css';

export const PostItem = ({ post }) => {
  return (
    <article className={cl.PostItem}>
      <div className={cl.PostItem__data}>
        <h2>
          {post.id}. {post.title}
        </h2>
        <p>{post.body}</p>
      </div>
      <MyButton>Delete</MyButton>
    </article>
  );
};

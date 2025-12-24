import React from 'react';
import { PostItem } from './PostItem';

export const PostList = ({ posts }) => {
  return (
    <section>
      <h1>Posts about React.js</h1>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </section>
  );
};

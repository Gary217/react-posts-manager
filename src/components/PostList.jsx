import React from 'react';
import { PostItem } from './PostItem';

export const PostList = ({ posts, setPosts }) => {
  return (
    <section>
      <h1>Posts about React.js</h1>
      {posts.map((post, index) => (
        <PostItem post={post} key={post.id} number={index + 1} posts={posts} setPosts={setPosts} />
      ))}
    </section>
  );
};

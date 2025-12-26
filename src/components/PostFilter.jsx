import React, { useState } from 'react';
import cl from './PostFilter.module.css';
import { MyInput } from './UI/input/MyInput';

export const PostFilter = ({ children, sort, sortPosts }) => {
  return (
    <section className={cl.PostFilter}>
      <div>
        <h2>Sort by:</h2>
        <select name="sort" value={sort} onChange={(event) => sortPosts(event.target.value)}>
          <option value="title">Title</option>
          <option value="body">Description</option>
        </select>
      </div>
      {children}
      <MyInput />
    </section>
  );
};

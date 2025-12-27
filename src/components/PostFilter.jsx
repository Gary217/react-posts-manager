import cl from './PostFilter.module.css';
import { MyInput } from './UI/input/MyInput';

export const PostFilter = ({ children, selectedSort, sortPosts, searchQuery, setSearchQuery }) => {
  return (
    <section className={cl.PostFilter}>
      <div>
        <h2>Sort by:</h2>
        <select name="sort" value={selectedSort} onChange={(e) => sortPosts(e.target.value)}>
          <option value="title">Title</option>
          <option value="body">Description</option>
        </select>
      </div>
      {children}
      <MyInput
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </section>
  );
};

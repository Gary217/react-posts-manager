import cl from './PostFilter.module.css';
import { MyInput } from './UI/input/MyInput';

export const PostFilter = ({ children, selectedSort, sortPosts, searchQuery, setSearchQuery }) => {
  return (
    <section className={cl.PostFilter}>
      <div
        className={cl.PostFilter__content}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
      >
        <h2>Sort by:</h2>
        <select name="sort" value={selectedSort} onChange={(e) => sortPosts(e.target.value)}>
          <option value="title">Title</option>
          <option value="body">Description</option>
        </select>
      </div>
      {children}
      <div className={cl.PostFilter__content}>
        <MyInput
          name="search"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ width: '100%' }}
        />
      </div>
    </section>
  );
};

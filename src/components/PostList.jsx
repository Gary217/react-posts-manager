import { PostItem } from './PostItem';

export const PostList = ({ posts, setPosts, pageNumber, pageLimit }) => {
  return (
    <section>
      <h1>Posts about React.js</h1>
      {posts.length === 0 ? (
        <h2 style={{ color: 'red' }}>No posts found!</h2>
      ) : (
        posts.map((post, index) => (
          <PostItem
            post={post}
            key={post.id}
            number={(pageNumber - 1) * pageLimit + index + 1}
            posts={posts}
            setPosts={setPosts}
          />
        ))
      )}
    </section>
  );
};

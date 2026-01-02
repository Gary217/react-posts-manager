import { PostItem } from './PostItem';

export const PostList = ({ children, posts, setPosts, pageNumber, pageLimit, postError }) => {
  if (postError) {
    return (
      <section>
        <h2 style={{ color: 'red' }}>
          Something went wrong while loading posts. Please try again later.
          <span style={{ display: 'block' }}>{postError}</span>
        </h2>
      </section>
    );
  }

  if (posts.length === 0) {
    return (
      <section>
        <h2 style={{ color: 'red' }}>No posts found!</h2>
      </section>
    );
  }

  return (
    <section>
      <h1>{children}</h1>
      {posts.map((post, index) => (
        <PostItem
          post={post}
          key={post.id}
          number={(pageNumber - 1) * pageLimit + index + 1}
          posts={posts}
          setPosts={setPosts}
        />
      ))}
    </section>
  );
};

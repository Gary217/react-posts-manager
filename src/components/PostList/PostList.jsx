import { PostItem } from '../PostItem/PostItem';
import { MyButton } from '../UI/button/MyButton';
import cl from '../UI/button/MyButton.module.css';

export const PostList = ({
  children,
  posts,
  setPosts,
  pageNumber,
  pageLimit,
  postError,
  fetchPosts,
}) => {
  if (postError) {
    return (
      <section className={cl.MyButton__err}>
        <h1 style={{ color: 'red', fontSize: '1.5em' }}>
          Something went wrong while loading posts. Please try again later.
        </h1>
        {/* <p style={{ color: 'red' }}>{postError}</p> */}
        <MyButton
          onClick={() => {
            fetchPosts();
          }}
        >
          Tap to retry
        </MyButton>
      </section>
    );
  }

  if (posts.length === 0) {
    return (
      <section>
        <h1 style={{ color: 'red', fontSize: '1.5em' }}>No posts found!</h1>
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

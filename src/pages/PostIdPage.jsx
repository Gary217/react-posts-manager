import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';
import { MyLoader } from '../components/UI/loader/MyLoader';
import { MyButton } from '../components/UI/button/MyButton';
import cl from '../components/UI/button/MyButton.module.css';

export const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const isValid = Number.isInteger(Number(params.id));

  const [fetching, isPostLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentsById(id);
    setComments(response.data);
  });

  const loadPostData = () => {
    fetching(params.id);
    fetchComments(params.id);
  };

  useEffect(() => {
    if (isValid) {
      loadPostData();
    }
  }, [params.id]);

  if (!isValid) {
    return <Navigate to={'/error'} />;
  }

  return (
    <section>
      <p style={{ fontSize: '2em' }}>Viewing Post #{params.id}</p>

      {error && (
        <div className={cl.MyButton__err}>
          <p style={{ color: 'red', fontSize: '1.5em' }}>
            Couldn’t load the post. Please try again later.
          </p>
          {/* <p style={{ color: 'red' }}>{error}</p> */}
          <MyButton
            onClick={() => {
              loadPostData();
            }}
          >
            Tap to retry
          </MyButton>
        </div>
      )}

      {isPostLoading ? (
        <MyLoader />
      ) : (
        <div>
          <h1>{post.title}</h1>
          <p style={{ textAlign: 'left' }}>{post.body}</p>
        </div>
      )}

      <h2 style={{ textAlign: 'left' }}>Comments:</h2>

      {comError && (
        <div className={cl.MyButton__err}>
          <p style={{ color: 'red', fontSize: '1.5em' }}>
            Couldn’t load comments. Please try again later.
          </p>
          {/* <p style={{ color: 'red' }}>{comError}</p> */}
          <MyButton
            onClick={() => {
              loadPostData();
            }}
          >
            Try again
          </MyButton>
        </div>
      )}

      {isComLoading ? (
        <MyLoader />
      ) : (
        <div style={{ textAlign: 'left', display: 'grid', gap: 15 }}>
          {comments.map((comm) => (
            <div key={comm.id}>
              <p>
                <strong>{comm.email}</strong>
              </p>
              <p>{comm.name}</p>
              <p>{comm.body}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

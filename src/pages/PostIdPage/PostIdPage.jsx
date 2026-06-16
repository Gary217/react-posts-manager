import { useContext, useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import PostService from '../../API/PostService';
import { useFetching } from '../../hooks/useFetching';
import { MyLoader } from '../../components/UI/loader/MyLoader';
import { MyButton } from '../../components/UI/button/MyButton';
import cl from '../../components/UI/button/MyButton.module.css';
import { PostNotFound } from './PostNotFound';
import { PostFetchError } from './PostFetchError';
import { PostsContext } from '../../context/PostsContext';

export const PostIdPage = () => {
  const params = useParams();
  const { posts } = useContext(PostsContext);
  const [post, setPost] = useState([]);
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
    if (!isValid) return;
    const localPost = posts.find((p) => p.id === Number(params.id));

    if (localPost) {
      setPost(localPost);
    } else {
      fetching(params.id);
    }

    fetchComments(params.id);
  }, [params.id, posts]);

  if (!isValid) {
    return <Navigate to={'/error'} />;
  }

  if (error === 'NOT_FOUND') {
    return <PostNotFound params={params} />;
  }

  if (error === 'FETCH_ERROR') {
    return <PostFetchError params={params} loadPostData={loadPostData} />;
  }

  return (
    <section>
      <p style={{ fontSize: '2em' }}>Viewing Post #{params.id}</p>

      {isPostLoading && !post ? (
        <MyLoader />
      ) : post ? (
        <div>
          <h1>{post.title}</h1>
          <p style={{ textAlign: 'left' }}>{post.body}</p>
        </div>
      ) : (
        []
      )}

      <h2 style={{ textAlign: 'left' }}>Comments:</h2>

      {isComLoading && <MyLoader />}

      {comError === 'FETCH_ERROR' && (
        <div className={cl.MyButton__err}>
          <p style={{ color: 'red', fontSize: '1.5em' }}>
            Couldn’t load comments. Please try again later.
          </p>
          <MyButton onClick={fetchComments.bind(null, params.id)}>Try again</MyButton>
        </div>
      )}

      {!isComLoading && !comError && (
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

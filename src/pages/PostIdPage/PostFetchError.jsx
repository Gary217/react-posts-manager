import { MyButton } from '../../components/UI/button/MyButton';
import cl from '../../components/UI/button/MyButton.module.css';

export const PostFetchError = ({ params, loadPostData }) => {
  return (
    <section>
      <p style={{ fontSize: '2em' }}>Viewing Post #{params.id}</p>
      <div className={cl.MyButton__err}>
        <p style={{ color: 'red', fontSize: '1.5em' }}>
          Couldn’t load the post. Please try again later.
        </p>
        {/* <p style={{ color: 'red' }}>{error.message}</p> */}
        <MyButton
          onClick={() => {
            loadPostData();
          }}
        >
          Tap to retry
        </MyButton>
      </div>
    </section>
  );
};

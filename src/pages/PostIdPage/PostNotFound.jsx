export const PostNotFound = ({ params }) => {
  return (
    <section>
      <p style={{ fontSize: '2em' }}>Viewing Post #{params.id}</p>
      <p style={{ color: 'red', fontSize: '1.5em' }}>Post does not exist.</p>
    </section>
  );
};

import { Link } from 'react-router-dom';

export const Error = () => {
  return (
    <section>
      <h1>Oops! Page not found</h1>
      <p>
        Sorry, we couldn't find the page you’re looking for. Please check the URL or
        <Link to="/posts"> return to the homepage</Link>.
      </p>
    </section>
  );
};

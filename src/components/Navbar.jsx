import { Link } from 'react-router-dom';
import cl from './Navbar.module.css';
import { routes } from '../router/routes';

export const Navbar = () => {
  return (
    <section className={cl.Navbar}>
      <nav className={cl.Navbar__content}>
        {routes
          .filter((r) => r.nav)
          .map((r) => {
            return (
              <Link to={r.path} key={r.path}>
                {r.linkName}
              </Link>
            );
          })}
      </nav>
    </section>
  );
};

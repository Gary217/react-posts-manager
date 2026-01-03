import { Link } from 'react-router-dom';
import cl from './Navbar.module.css';

export const Navbar = ({ links }) => {
  return (
    <section className={cl.Navbar}>
      <nav className={cl.Navbar__content}>
        {links.map((page) => {
          return (
            <Link to={`/${page.path}`} key={page.path}>
              {page.linkName}
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

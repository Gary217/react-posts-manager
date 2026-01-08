import { Link } from 'react-router-dom';
import cl from './Navbar.module.css';
import { privateRoutes } from '../router/routes';
import { useContext } from 'react';
import { AuthContext } from '../context';
import { MyButton } from './UI/button/MyButton';

export const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };

  return (
    <section className={cl.Navbar}>
      <nav className={cl.Navbar__content}>
        {privateRoutes
          .filter((r) => r.nav)
          .map((r) => {
            return (
              <Link to={r.path} key={r.path}>
                {r.linkName}
              </Link>
            );
          })}
        <MyButton onClick={logout}>Sign Out</MyButton>
      </nav>
    </section>
  );
};

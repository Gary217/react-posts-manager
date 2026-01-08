import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AppRouter } from './components/AppRouter';
import { AuthContext } from './context';
import { useEffect, useState } from 'react';

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth, //setIsAuth: setIsAuth
      }}
    >
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { AppRouter } from './components/AppRouter';
import { AuthContext } from './context';
import { useEffect, useState } from 'react';

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth, //setIsAuth: setIsAuth
        isLoading,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

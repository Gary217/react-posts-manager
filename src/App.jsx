import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { AppRouter } from './components/AppRouter';
import { AuthContext } from './context/AuthContext';
import { useEffect, useState } from 'react';
import { PostsContext } from './context/PostsContext';

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
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
    </PostsContext.Provider>
  );
}

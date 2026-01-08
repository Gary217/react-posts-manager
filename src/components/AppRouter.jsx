import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router/routes';
import { useContext } from 'react';
import { AuthContext } from '../context';

export const AppRouter = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  return (
    <Routes>
      {isAuth ? (
        <>
          <Route path="/login" element={<Navigate to="/posts" replace />} />
          {privateRoutes.map((r) => (
            <Route path={r.path} element={<r.component />} key={r.path} />
          ))}
          <Route path="*" element={<Navigate to="/error" replace />} />
        </>
      ) : (
        <>
          {publicRoutes.map((r) => (
            <Route path={r.path} element={<r.component />} key={r.path} />
          ))}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </>
      )}
    </Routes>
  );
};

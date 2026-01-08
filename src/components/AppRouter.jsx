import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router/routes';

export const AppRouter = () => {
  const isAuth = false;
  return (
    <Routes>
      {isAuth ? (
        <>
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

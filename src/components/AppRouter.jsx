import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router/routes';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { MyLoader } from './UI/loader/MyLoader';

export const AppRouter = () => {
  const { isAuth, setIsAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <MyLoader />;
  }

  return (
    <Routes>
      {isAuth ? (
        <>
          {/* Сначала обрабатываем перенаправления с технических путей (/login и /) */}
          <Route path="/login" element={<Navigate to="/posts" replace />} />
          <Route path="/" element={<Navigate to="/posts" replace />} />

          {/* Затем рендерим все рабочие страницы приложения */}
          {privateRoutes.map((r) => (
            <Route path={r.path} element={<r.component />} key={r.path} />
          ))}

          {/* Если совсем ничего не подошло — только тогда уходим на ошибку */}
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

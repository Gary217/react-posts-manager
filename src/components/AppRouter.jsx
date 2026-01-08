import { Navigate, Route, Routes } from 'react-router-dom';
import { routes } from '../router/routes';

export const AppRouter = () => {
  return (
    <Routes>
      {routes.map((r) => (
        <Route path={r.path} element={<r.component />} key={r.path} />
      ))}
      <Route path="*" element={<Navigate to="/error" />} />
    </Routes>
  );
};

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { About } from './pages/About';
import { Posts } from './pages/Posts';
import { Navbar } from './components/Navbar';
import { Error } from './pages/Error';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar
        links={[
          { path: 'about', linkName: 'About' },
          { path: 'posts', linkName: 'Posts' },
        ]}
      />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
    </BrowserRouter>
  );
}

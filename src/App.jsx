import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './pages/About';
import { Posts } from './pages/Posts';
import { Navbar } from './components/Navbar';

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
      </Routes>
    </BrowserRouter>
  );
}

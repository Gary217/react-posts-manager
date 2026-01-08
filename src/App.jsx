import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AppRouter } from './components/AppRouter';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

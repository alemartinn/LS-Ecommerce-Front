import './App.css';
import WebsiteLayout from './layouts/WebsiteLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <WebsiteLayout>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </WebsiteLayout>
  );
}

export default App;

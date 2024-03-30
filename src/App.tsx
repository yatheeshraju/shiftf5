import { ThemeProvider } from '@/components/ThemeProvider';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import ComingSoon from './pages/ComingSoon';
import Compare from './pages/Compare';
import Home from './pages/Home';
import JsonFormatter from './pages/JsonFormatter';
import NotFound from './pages/NotFound';
import Notepad from './pages/Notepad';
function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="shiftf5-ui-theme">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="json_formatter" element={<JsonFormatter />} />
            <Route path="compare" element={<Compare />} />
            <Route path="notepad" element={<Notepad />} />
            <Route path="comingsoon" element={<ComingSoon />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;

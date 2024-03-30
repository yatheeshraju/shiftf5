import { ThemeProvider } from '@/components/ThemeProvider';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Home from './pages/Home';
import JsonFormatter from './pages/JsonFormatter';
import NotFound from './pages/NotFound';
function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="shiftf5-ui-theme">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="json_formatter" element={<JsonFormatter />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;

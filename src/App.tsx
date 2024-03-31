import { ThemeProvider } from '@/components/ThemeProvider';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import ColorPicker from './pages/ColorPicker';
import ComingSoon from './pages/ComingSoon';
import Compare from './pages/Compare';
import Epoch from './pages/Epoch';
import Home from './pages/Home';
import IpAddress from './pages/IpAddress';
import JsonFormatter from './pages/JsonFormatter';
import NotFound from './pages/NotFound';
import Notepad from './pages/Notepad';
import Pomodoro from './pages/Pomodoro';
function App() {
  return (
    <>
      <HelmetProvider>
        <ThemeProvider defaultTheme="dark" storageKey="shiftf5-ui-theme">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="json_formatter" element={<JsonFormatter />} />
              <Route path="compare" element={<Compare />} />
              <Route path="notepad" element={<Notepad />} />
              <Route path="epoch" element={<Epoch />} />
              <Route path="pomodoro" element={<Pomodoro />} />
              <Route path="comingsoon" element={<ComingSoon />} />
              <Route path="colorpicker" element={<ColorPicker />} />
              <Route path="ipaddress" element={<IpAddress />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </HelmetProvider>
    </>
  );
}

export default App;

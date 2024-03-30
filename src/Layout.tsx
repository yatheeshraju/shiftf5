import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

export interface LayoutProps {}

export default function Layout(props: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="min-h-full flex flex-col ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

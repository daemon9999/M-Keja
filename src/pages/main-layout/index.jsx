import { Outlet } from 'react-router-dom';
import Footer from 'src/components/footer';
import Header from 'src/components/header';
export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

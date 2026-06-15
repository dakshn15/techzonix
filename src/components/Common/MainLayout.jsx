import AnnounceBar from './AnnounceBar';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <AnnounceBar />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;

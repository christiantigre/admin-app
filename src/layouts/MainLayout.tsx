import React  from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/template/header';
import Sidebar from '../components/template/sidebar';
import Footer from '../components/template/footer';



const LayoutTemplate: React.FC = () => {



  return (
    <div className="flex flex-col min-h-screen">

      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-grow p-6 bg-gray-100">
        <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutTemplate;

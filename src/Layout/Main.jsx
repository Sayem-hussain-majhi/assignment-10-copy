import React from 'react';
import Header from '../Pages/Home/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Home/Shared/Footer/Footer';

const Main = () => {
    return (
        <div className='max-w-6xl mx-auto'>
          <Header></Header>  
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Main;
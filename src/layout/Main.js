import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import SideNav from '../components/SideNav/SideNav';

const Main = () => {
    return (
        <div className='mx-8 '>
            <Header></Header>
            <div className='grid grid-cols-12 gap-4 bg-yellow-50 px-8 py-8 rounded-2xl'>
                <div className='col-span-3 '>
                    <SideNav></SideNav>
                </div>
                <div className='col-span-9'>
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default Main;
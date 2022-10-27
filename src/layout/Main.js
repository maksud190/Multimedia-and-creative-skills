import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import SideNav from '../components/SideNav/SideNav';

const Main = () => {
    return (
        <div className='mx-8'>
            <Header></Header>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-3'>
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
import React from 'react';
import Header from '../components/Header';
import LatestTitle from '../components/LatestTitle';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import LeftAside from '../components/HomeLayout/LeftAside';
import RightAside from '../components/HomeLayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header className='py-6 px-4 sm:max-w-11/12 mx-auto'>
                <Header></Header>
                <LatestTitle></LatestTitle>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto my-6 grid grid-cols-12 gap-4 p-2'>
                <aside className='left_nav col-span-3 sticky h-fit top-6'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='right_nav col-span-3 sticky h-fit top-6'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;



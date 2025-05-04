import React from 'react';
import Header from '../../components/Header';
import { Outlet } from 'react-router';
import LatestTitle from '../../components/LatestTitle';
import Navbar from '../../components/Navbar';

const Home = () => {
    return (
        <div>
            <header className='py-6 px-4 sm:max-w-11/12 mx-auto border'>
                <Header></Header>
                <LatestTitle></LatestTitle>
                <Navbar></Navbar>
            </header>
            <main>
                <section className='left_nav'>
                    
                </section>
                <section className='main'>
                    <Outlet></Outlet>
                </section>
                <section className='right_nav'>

                </section>
            </main>
        </div>
    );
};

export default Home;
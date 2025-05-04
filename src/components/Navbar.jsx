import React from 'react';
import { NavLink } from 'react-router'; 
import user from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between'>
            <section></section>
            <section className='flex items-center gap-5 text-accent'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/'>About</NavLink>
                <NavLink to='/'>Career</NavLink>
            </section>
            <section className='flex items-center gap-6'>
                <img src={user} alt="" />
                <button className='btn btn-primary px-8 text-base-100'>Login</button>
            </section>
        </div>
    );
};

export default Navbar;
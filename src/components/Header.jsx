import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 mb-8'>
            <img className='w-md mb-4' src={logo} alt="" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p className='text-accent font-semibold'>{format(new Date(), 'EEEE, MMMM d, yyyy')}</p>
        </div>
    );
};

export default Header;
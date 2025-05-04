import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestTitle = () => {
    return (
        <div className='flex items-center gap-6 bg-base-200 p-3 rounded-sm mb-6'>
            <p className='bg-secondary p-2 inline px-4 rounded-sm text-base-100'>Latest</p>
            <Marquee speed={60} pauseOnHover={true} className='flex gap-5'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </Marquee>
        </div>
    );
};

export default LatestTitle;
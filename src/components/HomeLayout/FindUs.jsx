import React from 'react';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold'>Find Us On</h2>
            <div className="join join-vertical w-full mb-5 mt-2">
                <button className="justify-start w-full btn join-item -base-100 text-accent">Facebook</button>
                <button className="justify-start w-full btn join-item -base-100 text-accent">Twitter</button>
                <button className="justify-start w-full btn join-item -base-100 text-accent">Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;
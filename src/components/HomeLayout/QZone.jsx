import React from 'react';
import swimmingImage from '../../assets/swimming.png';
import classImage from '../../assets/class.png';
import playImage from '../../assets/playground.png';

const QZone = () => {
    return (
        <div className='bg-base-200 p-4 rounded-sm'>
            <h2 className='text-accent font-bold'>Q-Zone</h2>
            <div className="space-y-5 mt-6">
            <img src={swimmingImage} alt="" />
            <img src={classImage} alt="" />
            <img src={playImage} alt="" />
            </div>
        </div>
    );
};

export default QZone;
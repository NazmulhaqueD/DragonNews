import React from 'react';
import { NavLink } from 'react-router';

const NewsDetailsCard = ({ newsDetails }) => {
    console.log(newsDetails);
    return (
        <div className='space-y-6 bg-base-200 p-6 rounded-2xl'>
            <img className='w-full h-[350px] object-cover rounded-2xl' src={newsDetails.image_url} alt="" />
            <h2 className='text-xl font-bold'>{newsDetails.title}</h2>
            <p>{newsDetails.details}</p>
            <NavLink to={`/category/${newsDetails.category_id
                }`}><button className='btn btn-secondary'>All news in this category</button></NavLink>
        </div>
    );
};

export default NewsDetailsCard;
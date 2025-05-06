import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Header from '../components/Header';
import RightAside from '../components/HomeLayout/RightAside';
import NewsDetailsCard from '../components/NewsDetailsCard';

const NewsDetails = () => {

    const [newsDetails, setNewsDetails] = useState({});
    const data = useLoaderData();
    const {id} = useParams();
    // console.log(data, id);

    useEffect(() => {
        const news = data.find((singleNews) =>singleNews.id == id);
        setNewsDetails(news);
    }, [data, id])

    return (
        <div>
            <header className='py-4'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5'>
                <section className='col-span-9'>
                    <h2 className='text-xl text-secondary py-4'>Dragon News</h2>
                    <NewsDetailsCard newsDetails={newsDetails}></NewsDetailsCard>
                </section>
                <aside className='right-aside col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;
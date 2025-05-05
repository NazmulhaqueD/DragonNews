import React, { use } from 'react';
import { NavLink} from 'react-router';


// category data load
const categoryPromise = fetch('/categories.json').then(res => res.json())

const Category = () => {
    const categories = use(categoryPromise);
    return (
        <div>
            <h2 className='text-xl font-bold'>All Category</h2>
            <div className='grid grid-cols-1 gap-3 py-6'>
                {
                    categories.map(category => <NavLink
                        key={category.id}
                        to={`/category/${category.id}`}
                        className={'text-center p-3 hover:bg-base-200'}
                    >{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Category;
import React from 'react';
// import { getStoredCart } from '../utils/fakeDb';

import { useLoaderData } from 'react-router-dom';
import ProductCart from './ProductCart';


const AppliedJobs = () => {
    const { jobCart } = useLoaderData()
    // const jobCart = getStoredCart()
    // console.log(jobCart)




    return (
        <div>

            <ul className='mt-6'>
                {jobCart.map(product => (
                    <ProductCart
                        key={product.id}
                        product={product}
                    ></ProductCart>

                ))}
            </ul>


        </div>
    );
};

export default AppliedJobs;




import React from 'react';
import { getStoredCart } from '../utils/fakeDb';

// import { useLoaderData } from 'react-router-dom';


const AppliedJobs = () => {
    // const { jobCart } = useLoaderData()
    const jobCart = getStoredCart()
    console.log(jobCart)




    return (
        <div>
            <h1 className="text-center text-4xl mt-6 mx-auto">Vai data local storage a set korte parce but data get kore akhane show korate pari nai</h1>

        </div>
    );
};

export default AppliedJobs;
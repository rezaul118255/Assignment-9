import React from 'react';
import "./product.css"

const ProductCart = ({ product }) => {
    const { id, jobLogo, jobType, name, jobDescription, email, phoneNumber, experiences, educationalRequirements, jobResponsibility, salaryRange, location, jobTitle } = product
    console.log(product)

    return (
        <div className='border-2 border-indigo-600 mt-9 rounded  mx-48'>
            <div className='grid grid-cols-2'>
                <div className='flex'>
                    <div className='pic'>
                        <img src={jobLogo} alt="" />
                    </div>
                    <div>
                        <h1 className='text-1xl mx-6'>{jobTitle}</h1>
                        <h1 className='text-1xl mx-6 mt-3'>{name}</h1>



                        <h1 className='text-1xl mx-6'>{jobType}</h1>


                        <h1 className='text-1xl mx-6'>{location}</h1>
                        <h1 className='text-1xl mx-6'>{salaryRange}</h1>
                    </div>
                </div>
                <div>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6 mx-auto ms-60 mt-20'>
                        views dettails
                    </button>

                </div>
            </div>
        </div>
    );
};

export default ProductCart;
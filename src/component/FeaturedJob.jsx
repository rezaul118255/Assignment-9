import React from 'react';
import "./Featured.css"
import { Link } from 'react-router-dom';


const FeaturedJob = ({ featured }) => {
    // console.log(featured)
    const { jobLogo, jobTitle, name, jobType, jobCategory, location, salaryRange, id } = featured
    return (
        <div className='featured '>


            < img src={jobLogo} alt="" />
            <h4 className='text-3xl mx-6'>{jobTitle}</h4>
            <p className='text-2xl mx-6 mt-3'>{name}</p>
            <div className='flex mt-3'>
                <button className='text-1xl mx-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>{jobType}</button>
                <button className='text-1xl mx-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>{jobCategory}</button>

            </div>
            <div className='flex'>
                <p className='text-1xl mx-6 mt-3'>{location}</p>
                <p className='text-1xl mx-6 mt-3'>{salaryRange}</p>
            </div>

            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-6 mt-6 mx-auto'> <Link to={`/FeaturedJobDetails/${id}`}>View Details</Link>
            </button>






        </div>
    );
};

export default FeaturedJob;
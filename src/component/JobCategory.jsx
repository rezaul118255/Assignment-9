import React from 'react';
import('./Jobcategory.css')

const JobCategory = ({ Category }) => {
    console.log(Category)
    const { name, jobImgUrl, availableJobs } = Category
    return (
        <div className='category'>
            <img src={jobImgUrl} alt="" />
            <h3>{name}</h3>
            <p>{availableJobs}</p>

        </div>
    );
};

export default JobCategory;
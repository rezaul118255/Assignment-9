import React, { useEffect, useState } from 'react';
import('./Jobcategory.css')

const JobCategory = () => {
    const [Category, setCategory] = useState([])
    // let { id } = useParams()
    useEffect(() => {
        fetch('/public/job-category.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, []);

    console.log(Category)



    const { name, jobImgUrl, availableJobs } = Category
    return (
        <div className='category'>


            <img src={jobImgUrl} alt="" />
            <h3 className='text-2xl mt-3'>{name}</h3>
            <p className='mt-2'>{availableJobs}</p>

        </div>
    );
};

export default JobCategory;
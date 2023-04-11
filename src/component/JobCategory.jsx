import { key } from 'localforage';
import React, { useEffect, useState } from 'react';
import('./Jobcategory.css')

const JobCategory = () => {
    const [Category, setCategory] = useState([])

    useEffect(() => {
        fetch('/public/job-category.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, []);


    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-20 mx-9 md:mx-16'>
            {
                Category.map((category) => {


                    const { name, jobImgUrl, availableJobs, id } = category


                    // console.log(name)
                    return <div className='category'>
                        <img src={jobImgUrl} alt="" />
                        <h3 className='text-2xl mt-3'>{name}</h3>
                        <p className='mt-2'>{availableJobs}</p>

                    </div>
                })
            }




        </div>
    );
};

export default JobCategory;
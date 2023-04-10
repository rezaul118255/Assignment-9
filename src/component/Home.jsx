import React from 'react';
import Banner from './Banner';
import JobCategory from './JobCategory';
import { useLoaderData } from 'react-router-dom';
import('./Home.css')

const Home = () => {
    const jobCategory = useLoaderData()

    return (
        <div >
            <Banner></Banner>
            <div className='job-container'>
                <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-9 mx-9'>
                    {
                        jobCategory.map(Category => <JobCategory
                            key={Category.id}
                            Category={Category}
                        ></JobCategory>)

                    }

                </div>


            </div>


        </div>
    );
};

export default Home;
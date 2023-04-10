import React from 'react';
import Banner from './Banner';
import JobCategory from './JobCategory';
import FeaturedJob from './FeaturedJob';
import { useLoaderData } from 'react-router-dom';



const Home = () => {
    // const jobCategory = useLoaderData()
    const featuredJob = useLoaderData()


    return (
        <div >
            <Banner></Banner>
            <div className='job-category'>
                <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-20 mx-9 md:mx-16'>
                    {/* {
                        jobCategory.map(Category => <JobCategory
                            key={Category.id}
                            Category={Category}
                        ></JobCategory>)

                    } */}
                    <JobCategory></JobCategory>

                </div>


            </div>
            <div>
                <div>
                    <h1 className='text-center text-4xl mt-14'>Featured Jobs</h1>
                    <p className='text-center text-1xl mt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>

                </div>
                <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-20 mx-9 md:mx-16'>
                    {
                        featuredJob.map(featured => <FeaturedJob
                            key={featured.id}
                            featured={featured}
                        ></FeaturedJob>)

                    }

                </div>

                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6 mx-auto'>See All Jobs</button>



            </div>




        </div>
    );
};

export default Home;
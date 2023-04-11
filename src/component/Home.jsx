import React from 'react';
import Banner from './Banner';
import JobCategory from './JobCategory';
import FeaturedJob from './FeaturedJob';
import { useLoaderData } from 'react-router-dom';
import { addToDb } from '../utils/fakeDb';



const Home = () => {
    // const jobCategory = useLoaderData()
    const featuredJob = useLoaderData()
    const handleAddToCart = id => {
        condole.log(id)
        addToDb(id)
    }


    return (
        <div >
            <Banner></Banner>
            <div className='job-category'>
                <div>
                    <h1 className='text-center text-4xl mt-14'>Job Category List</h1>
                    <p className='text-center text-1xl mt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div >

                    <JobCategory></JobCategory>

                </div>


            </div>
            <div>
                <div>
                    <h1 className='text-center text-4xl mt-14'>Featured Jobs</h1>
                    <p className='text-center text-1xl mt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>

                </div>
                <div className=' grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 mt-20 mx-9 md:mx-16'>
                    {
                        featuredJob.map(featured => <FeaturedJob
                            key={featured.id}
                            featured={featured}
                            handleAddToCart={handleAddToCart}
                        ></FeaturedJob>)

                    }

                </div>





            </div>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6 ms-16'>See All Jobs</button>




        </div>
    );
};

export default Home;
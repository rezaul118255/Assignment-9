import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-16 md:mx-16 mx-9'>
                <div className=''>
                    <h1 className='text-3xl md:text-6xl font-bold'>Now your time <br /> Change your <br /> <span className="text-blue-500">Life</span>  </h1>
                    <p className='mt-6 '>
                        Explore thousands of job opportunities with all the information <br /> you need. Its your future. Come find it. Manage all your job application <br /> from start to finish.
                    </p>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5'>
                        Get started

                    </button>

                </div>
                <div>
                    <img src="https://img.freepik.com/free-photo/happy-young-african-businessman_171337-736.jpg?w=740&t=st=1681087809~exp=1681088409~hmac=a9acec7b47ab35716b9526852384ddcc7b1ec8bc1caf0c8c39499c57e3a27e3e" alt="" />

                </div>



            </div>

        </div>
    );
};

export default Banner;
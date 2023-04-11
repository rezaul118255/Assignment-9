import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
// import { addToDb } from '../utils/fakeDb';


const FeaturedJobDetails = () => {
    const [details, setdetails] = useState([])
    let { id } = useParams()
    // console.log(id)
    // const hadelAddToCart = id => {
    //     console.log(id)
    // } 
    // localStorage.setItem(id)
    // localStorage.setItem('jobDetails', id)
    // let applyedJob = {}
    // get previous data form local storage
    // const storeJob = localStorage.getItem('jobDetails')
    // if (storeJob) {
    //     applyedJob = JSON.parse(storeJob)
    // }
    // const quantity = applyedJob[id]
    // if (quantity) {
    //     const newquantity = quantity + '1'
    //     applyedJob[id] = newquantity

    // } else {
    //     applyedJob[id] = '1'
    // }
    // localStorage.setItem('applyedJob', JSON.stringify(applyedJob))




    useEffect(() => {
        fetch('/public/Featured-job.json')
            .then(res => res.json())
            .then(data => setdetails(data))
    }, []);
    // console.log(details)
    const storeJobData = details.filter((detail) => detail.id == id);
    // console.log(storeJobData)



    return (
        <div >

            {
                storeJobData.map((storedata) => {
                    const { id, jobDescription, email, phoneNumber, experiences, educationalRequirements, jobResponsibility, salaryRange, location, jobTitle } = storedata
                    // console.log(id)

                    return <div key={id}>
                        <h1 className='text-4xl text-center mt-12 font-semibold'>Job Details page </h1>

                        <div className='grid grid-cols-1 md:grid-cols-2 mx-16 md:mx-28 mt-16'>
                            <div className='mx-9 '>
                                <p> <span className='text-1xl font-bold my-8'>Job Description:</span>  {jobDescription}</p>
                                <p> <span className='text-1xl font-bold my-5 mt-6'>jobResponsibility:</span>{jobResponsibility}</p>
                                <p> <span className='text-1xl font-bold'>Educational Requirements:</span> {educationalRequirements}</p>
                                <p> <span className='text-1xl font-bold'>Experiences: </span> {experiences}</p>

                            </div>
                            <div className='bg-pink-100'>
                                <p className='text-center text-3xl '>Job Details</p>
                                <hr />
                                <div className='mx-9'>
                                    <p> <span className='text-1xl font-bold'>Salary:</span>{salaryRange}</p>
                                    <p>  <span className='text-1xl font-bold'>JobTitle:</span>  {jobTitle}</p>
                                    <p className='text-center text-3xl '>Contact information</p>
                                </div>
                                <hr />
                                <div className='mx-9'>
                                    <p> <span className='text-1xl font-bold'>Phone :</span>{phoneNumber}</p>
                                    <p> <span className='text-1xl font-bold'> Email:</span> {email}</p>
                                    <p>  <span className='text-1xl font-bold'> Address:</span>{location}</p>
                                    <button onClick={() => alert('vi local store add korte pari nai')} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6 mx-auto my-6'>Apply Now </button>
                                </div>




                            </div>
                        </div>



                    </div>

                })

            }


        </div>
    );
};

export default FeaturedJobDetails;
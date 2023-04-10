import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';


const FeaturedJobDetails = () => {
    const [details, setdetails] = useState([])
    let { id } = useParams()
    useEffect((id) => {
        fetch('/public/Featured-job.json')
            .then(res => res.json())
            .then(data => setdetails(data))
    }, []);
    console.log(details)
    const storeJobData = details.filter((detail) => detail.id == id);
    console.log(storeJobData)

    // let jobDetails = useLoaderData(id)
    // console.log(jobDetails)
    // useEffect(() => {
    //     if (jobDetails) {
    //         let detailsData = jobDetails.find(jobDetails.id)
    //         setdetails(detailsData)
    //     }
    // }, [])

    return (
        <div >
            <h1 className='text-6xl text-center'>Job Details page </h1>
            {
                storeJobData.map((storedata) => {
                    const { id, name, jobLogo, jobDescription } = storedata
                    console.log(id)

                    return <article key={id}>
                        <h1>{name}</h1>
                        <p>{jobDescription}</p>
                        <h1>{id}</h1>
                        <img src={jobLogo} alt="" />


                    </article>

                })

            }


        </div>
    );
};

export default FeaturedJobDetails;
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
// import ApplyDetails from './ApplyDetails';
// import AppliedJobs from './AppliedJobs';
import FeaturedDetailsShow from './FeaturedDetailsShow';
import { addToDb } from '../utils/fakeDb';



const FeaturedJobDetails = () => {
    const [details, setdetails] = useState([])
    let { id } = useParams()
    useEffect(() => {
        fetch('/Featured-job.json')
            .then(res => res.json())
            .then(data => setdetails(data))
    }, []);

    const storeJobData = details.filter((detail) => detail.id == id);


    const handleAddToCart = id => {
        // console.log(id)
        addToDb(id)
    }

    return (
        <div >




            {
                storeJobData.map((storedata) =>

                    <FeaturedDetailsShow
                        key={storedata.id}
                        storedata={storedata}

                        handleAddToCart={handleAddToCart}
                    ></FeaturedDetailsShow>
                )

            }


        </div>
    );
};

export default FeaturedJobDetails;
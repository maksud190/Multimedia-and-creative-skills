import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {


    const courseDetails = useLoaderData();

    // const { title, details, image_url } = course || {};

    const handlePremium = () => {
        
    }


    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl my-5 mr-5">
                <figure><img className='h-32 w-64' src={courseDetails.image_url} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{courseDetails.title}</h2>
                    <p>{courseDetails.details}</p>
                </div>
            </div>
            <br />
            <div className='text-center'>
                <button onClick={handlePremium} className='btn btn-outline'><Link to='/checkOut'>Get Premium Access</Link></button>
            </div>

        </div>
    );
};

export default CourseDetails;
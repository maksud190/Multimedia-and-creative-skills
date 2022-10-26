import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = ({ course }) => {


    const courseDetails = useLoaderData();

    const { title, details, image_url } = course || {};


    return (
        <div className="card lg:card-side bg-base-100 shadow-xl my-5 mr-5">
            <figure><img className='h-32 w-64' src={courseDetails.image_url} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{courseDetails.title}</h2>

                <p>{courseDetails.details}</p>

            </div>
        </div>
    );
};

export default CourseDetails;
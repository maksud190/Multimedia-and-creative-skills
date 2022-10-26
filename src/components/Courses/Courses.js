import React from 'react';
import { Link } from 'react-router-dom';

const Courses = ({ course }) => {

    const { title, details, image_url, _id} = course;
    console.log(course);

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl my-5 mr-5">
            <figure><img className='h-32 w-64' src={image_url} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
            {
                    details.length > 100 ?
                    <p>{details.slice(0, 100)+ '... '}<Link className='text-sky-600 underline' to={`/courseDetails/${_id}`}>Learn more</Link> </p>
                    :
                    <p>{details}</p>
                }
            </div>
        </div>
    );
};

export default Courses;
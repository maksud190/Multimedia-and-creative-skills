import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Courses = () => {

    const courses = useLoaderData();
    // const { title, details, image_url, _id } = course;
    // console.log(course);

    return (
        <>
        {
            courses.map(course=> <div className="card lg:card-side bg-base-100 shadow-xl my-5 mr-5">
            <figure><img className='h-32 w-64' src={course?.image_url} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{course?.title}</h2>
                {
                    course?.details.length > 100 ?
                        <p>{course?.details.slice(0, 100) + '... '}<Link className='text-sky-600 underline' to={`/courseDetails/${course?._id}`}>Learn more</Link></p>
                        :
                        <p>{course?.details}</p>
                }
            </div>
        </div>)
        }
        </>
    );
};

export default Courses;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';

const Home = () => {

    const allCourses = useLoaderData();

    return (
        <div>
            <div>
                <img src="../../images/android-chrome-512x512.png" alt="" />
                <h1 className='font-semibold text-2xl'>Multimedia and Creative Skills</h1>
            </div>

            {
                allCourses.map(course => <Courses
                    key={course._id}
                    course={course}
                ></Courses>)
            }
        </div>
    );
};

export default Home;
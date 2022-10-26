import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';

const Home = () => {

    const allCourses = useLoaderData();

    return (
        <div>
            <h1 className='font-semibold text-2xl'>Multimedia and Creative Skills</h1>
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
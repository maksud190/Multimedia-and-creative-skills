import React from 'react';
// import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';
import logo from '../../images/logo.png'

const Home = () => {

    
    // const allCourses = useLoaderData();

    return (
        <div>
            <div className='flex '>
                <img className='h-10 mr-4' src={logo} alt="" />
                <h1 className='font-semibold text-2xl'>Multimedia and Creative Skills</h1>
            </div>

            {/* {
                allCourses.map(course => <Courses
                    key={course._id}
                    course={course}
                ></Courses>)
            } */}
            <Courses></Courses>
        </div>
    );
};

export default Home;
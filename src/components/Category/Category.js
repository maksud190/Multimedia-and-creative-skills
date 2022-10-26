import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';

const Category = () => {

    const courses = useLoaderData();

    return (
        <div>
            <h1>This is category has {courses.length} courses</h1>
            {
                courses.map(course => <Courses
                key={course._id}
                course={course}
                ></Courses>)
            }
        </div>
    );
};

export default Category;
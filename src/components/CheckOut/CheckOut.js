import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {

    // const checkedIn = useLoaderData();

    return (
        <div className='text-center mt-20'>
            <h1>You have checked in.</h1>
            <br />
            <h1>Thank you.</h1>
        </div>
    );
};

export default CheckOut;
import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h1>What is Cors?</h1>
                <p className='mr-10'><span className='text-green-600'>Answer: </span> Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
            </div>
            <br />
            <hr />
            <br />
            <div>
                <h1>Why are you using firebase? What other other options do you have to implement authentication?</h1>
                <p className='mr-10'><span className='text-green-600'>Answer: </span>
                    <li>Give users a quick, intuitive sign-in process with Firebase Authentication. </li>
                    <li>Track each step of your onboarding flow to improve the experience.</li>
                    <li>Use personalization to give each user the best experience.</li>
                    <li>Define audiences based on user behavior and other Analytics variables.</li>
                    <li>Launch your next feature with minimal risk</li>
                    <li>Start by defining a small percentage of users as testers. </li>
                    <>And many more ...</>
                </p>
            </div>
            <br />
            <hr />
            <br />
            <div>
                <h1>What is Cors?</h1>
                <p className='mr-10'><span className='text-green-600'>Answer: </span>Node.js is an open source server environment.</p>
                <p className='mr-10'>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
            </div>


        </div>
    );
};

export default Blogs;
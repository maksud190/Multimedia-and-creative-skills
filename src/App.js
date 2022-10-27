import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Login from './Login/Login';
import Register from './components/Register/Register';
import Courses from './components/Courses/Courses';
import Blogs from './components/Blogs/Blogs';
import Category from './components/Category/Category';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CourseDetails from './components/CourseDetails/CourseDetails';
import CourseCards from './components/CourseCards/CourseCards';
import CheckOut from './components/CheckOut/CheckOut';


function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: ()=> fetch('https://assignment-10-educational-server.vercel.app/allCourses')
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/courses',
          element: <Courses></Courses>,
          loader: ()=> fetch('https://assignment-10-educational-server.vercel.app/allCourses')
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/category/:id',
          element: <Category></Category>,
          loader: ({params}) => fetch(`https://assignment-10-educational-server.vercel.app/category/${params.id}`)
        },
        {
          path: '/courseDetails/:id',
          element: <CourseDetails></CourseDetails>,
          loader: ({params})=> fetch(`https://assignment-10-educational-server.vercel.app/categoryData/${params.id}`)
        },
        {
          path: '/checkOut',
          element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
          // loader: ({params})=> fetch(`http://localhost:3000/courseDetails/${params.id}`)
        }
      ]
    },
    {
      path: '/*',
      element: <div className='flex justify-center text-red-600'><h1>Error 404...</h1><p>Page is not found. please route a valid page</p></div>
    }
    // {
    //   path: '*',
    //   element: <div>hwllow</div>
    // }
  ])

  return (
    <div className="">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;

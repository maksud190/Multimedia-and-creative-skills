import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Login from './Login/Login';
import Register from './components/Register/Register';
import Courses from './components/Courses/Courses';
import Blogs from './components/Blogs/Blogs';


function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
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
          element: <Courses></Courses>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
      ]
    },
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

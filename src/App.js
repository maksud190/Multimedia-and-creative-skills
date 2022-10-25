import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Login from './Login/Login';
import Register from './components/Register/Register';
import Courses from './components/Courses/Courses';
import Blogs from './components/Blogs/Blogs';

function App() {

  const router = createBrowserRouter([
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
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main.jsx/Main";
import Blogs from "../pages/Blogs";
import BookService from "../pages/BookService";
import About from "../pages/home/About";
import Home from "../pages/home/Home";
import Services from "../pages/home/Services";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {path:'/about',
        element:<About></About>
        },
        {
          path:'/services',
          element: <Services></Services>
        },
        {
          path : '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        },
        {
          path :'book/:id',
          element: <BookService></BookService>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        }
      ]
    },
  ]);

  export default router;
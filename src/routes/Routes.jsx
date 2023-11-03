import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main.jsx/Main";
import About from "../pages/home/About";
import Home from "../pages/home/Home";
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
          path: '/login',
          element: <Login></Login>
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        }
      ]
    },
  ]);

  export default router;
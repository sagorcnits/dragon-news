


import {
  createBrowserRouter
} from "react-router-dom";
import Root from "../layout/Root";
import Details from "../pages/details/Details";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children:[
        {
            path:"/",
            element:<Home></Home>,
         
        },
        {
          path:'/details',
          element:<Details></Details>
        },

        {
          path:'/login',
          element:<Login></Login>
        },

        {
          path:'/register',
          element:<Register></Register>
        }
        
      ]
    },
  ]);




export default router;
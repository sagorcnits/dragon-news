


import {
  createBrowserRouter
} from "react-router-dom";
import Root from "../layout/Root";
import Details from "../pages/details/Details";
import Home from "../pages/home/Home";


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
        }
      ]
    },
  ]);




export default router;
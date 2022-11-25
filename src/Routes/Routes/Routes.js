import { createBrowserRouter } from "react-router-dom"
import ErrorElement from "../../Errorpage/ErrorElement";
import Main from "../../Layout/MainLayout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Blog from "../../Pages/Shared/Blog/Blog";
import Signup from "../../Pages/SignUp/Signup";




const router = createBrowserRouter([

        {
            path: "/",
            element:<Main></Main>,
            errorElement:<ErrorElement></ErrorElement>,
            children :[
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path:'/login',
                    element:<Login></Login>
                },
                {
                    path : '/signup',
                    element:<Signup></Signup>
                },
                {
                    path : '/blog',
                    element:<Blog></Blog>
                }
            ]
        }

])

export default router;
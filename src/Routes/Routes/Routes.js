import { createBrowserRouter } from "react-router-dom"
import ErrorElement from "../../Errorpage/ErrorElement";
import DashBoardLayout from "../../Layout/DashboardLayout/DashBoardLayout";
import Main from "../../Layout/MainLayout/Main";
import BooksCollection from "../../Pages/BooksCollection/BooksCollection";
import Myorders from "../../Pages/DashBoard/Myorders/Myorders";
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
                },
                {
                    path :'/bookscollection/:name',
                    element :<BooksCollection></BooksCollection>,
                    loader :({params})=> fetch(`http://localhost:5001/products/${params.name}`)
                }
            ]
        },
        {
            path:'/dashboard',
            element:<DashBoardLayout></DashBoardLayout>,
            children:[
                {
                    path:'/dashboard',
                    element:<Myorders></Myorders>
                }

            ]
        }

])

export default router;
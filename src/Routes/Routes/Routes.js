import { createBrowserRouter } from "react-router-dom"
import ErrorElement from "../../Errorpage/ErrorElement";
import DashBoardLayout from "../../Layout/DashboardLayout/DashBoardLayout";
import Main from "../../Layout/MainLayout/Main";
import BooksCollection from "../../Pages/BooksCollection/BooksCollection";
import Allsellers from "../../Pages/DashBoard/AllSellers/Allsellers";
import Allusers from "../../Pages/DashBoard/Allusers/Allusers";
import Myorders from "../../Pages/DashBoard/Myorders/Myorders";
import Addproducts from "../../Pages/DashBoard/Seller/AddProducts/Addproducts";
import Myproducst from "../../Pages/DashBoard/Seller/Myproducts/Myproducst";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Blog from "../../Pages/Shared/Blog/Blog";
import Signup from "../../Pages/SignUp/Signup";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import PrivateRoutes from "../Privateroutes/PrivateRoutes";




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
                    loader :({params})=> fetch(`https://gyan-vandar-server.vercel.app/products/${params.name}`)
                }
            ]
        },
        {
            path:'/dashboard',
            element:<PrivateRoutes><DashBoardLayout></DashBoardLayout></PrivateRoutes>,
            children:[
                {
                    path:'/dashboard',
                    element:<Myorders></Myorders>
                },
                {
                    path:'/dashboard/allusers',
                    element:<AdminRoutes><Allusers></Allusers></AdminRoutes>
                },
                {
                    path:'/dashboard/allseller',
                    element:<AdminRoutes><Allsellers></Allsellers></AdminRoutes>
                },
                {
                    path:'/dashboard/myproducts',
                    element:<Myproducst></Myproducst>
                },
                {
                    path:'/dashboard/addproducts',
                    element:<Addproducts></Addproducts>
                },

            ]
        }

])

export default router;
import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Others from "../Layout/Others";
import Login from "../Pages/Home/Shared/Login/Login";
import Registration from "../Pages/Home/Shared/Registration/Registration";
import Home from "../Pages/Home/Home/Home";
import BrandItems from "../Pages/BrandItems/BrandItems";
import Detailes from "../Pages/Detailes/Detailes";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Update from "../Pages/Update/Update";
import PrivetRoute from "./PrivetRoute";

  const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('http://localhost:5000/brands')
            },
            {
                path: '/brandItems/:name',
                element: <BrandItems></BrandItems>,
                loader: ()=> fetch('http://localhost:5000/BrandItems')
            },
            {
                path: '/detailes/:name',
                element: <PrivetRoute><Detailes></Detailes></PrivetRoute>,
                loader: ()=> fetch('http://localhost:5000/brandItems')
            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/myCart',
                element: <PrivetRoute><MyCart></MyCart></PrivetRoute>,
                loader: ()=> fetch('http://localhost:5000/addToCartItems')
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: ()=> fetch('http://localhost:5000/brandItems')
            }
        ]

    },
    {
        path: '/',
        element: <Others></Others>,
        children: ([
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            }
        ])
    }

  ])

  export default router;
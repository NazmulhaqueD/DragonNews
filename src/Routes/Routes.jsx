import { createBrowserRouter } from "react-router";
import HomeLayout from "./HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayout from "./AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../PrivateRout/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        children: [
            {
                index: true,
                path: '/',
                Component: Home
            },
            {
                path: '/category/:id',
                loader: () => fetch('/news.json'),
                Component: CategoryNews
            }
        ]
    },
    {
        path: '/auth',
        Component: AuthLayout,
        children: [
            {
                path: '/auth/login',
                Component: Login
            },
            {
                path: '/auth/register',
                Component: Register
            }
        ]
    },
    {
        path: '/news-details/:id',
        loader: ()=>fetch('/news.json'),
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>
    },
    {
        path: '/*',
        element: <p>error</p>
    },

])

export default router;


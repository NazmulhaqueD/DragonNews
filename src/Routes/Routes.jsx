import { createBrowserRouter } from "react-router";
import HomeLayout from "./HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        children:[
            {
                index: true,
                path: '/',
                Component: Home
            },
            {
                path: '/category/:id',
                loader: ()=>fetch('/news.json'),
                Component: CategoryNews
            }
        ]
    },
    {
        path: '/*',
        element: <p>error</p>
    }
])

export default router;


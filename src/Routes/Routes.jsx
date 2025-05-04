import { createBrowserRouter } from "react-router";
import Home from "../Layouts/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Home
    },
    {
        path: '/auth',
        element: <p>Firebase authentication</p>
    },
    {
        path: '/news',
        element: <p>news portal</p>
    },
    {
        path: '/*',
        element: <p>error</p>
    }
])

export default router;


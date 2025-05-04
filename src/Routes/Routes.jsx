import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: '/',
        element: <p>home</p>
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


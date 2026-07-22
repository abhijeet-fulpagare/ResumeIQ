import { createBrowserRouter } from "react-router"
import Register from "../features/auth/pages/Register";
import Login from "../features/auth/pages/Login"



const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },

    {
        path: '/register',
        element:<Register/>
    },
    {
        path: '/',
        element:<h1>Home page</h1>
    }
])

export default router;


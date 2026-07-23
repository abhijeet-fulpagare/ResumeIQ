import { createBrowserRouter } from "react-router"
import Register from "../features/auth/pages/Register";
import Login from "../features/auth/pages/Login"

import Protected from "../features/auth/components/Protected";
import Home from "../features/interview/pages/home";
import Interview from "../features/interview/pages/Interview";
import InterviewProvider from "../features/interview/Interview.provider";

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
        element: <Protected><InterviewProvider><Home /></InterviewProvider></Protected>
    }, {
        path: '/interview/:interviewId',
        element:<Protected><InterviewProvider><Interview /></InterviewProvider></Protected>
    }
])

export default router;


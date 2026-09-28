import {createBrowserRouter} from "react-router-dom"
import App from "./App";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import SectorSelector from "./pages/app/SectorSelector";
import ProtectedRoute from "./components/ProtectedRoute";

export const router = createBrowserRouter([
    {path: '/', element: <App />},
    {path: '/signup', element: <SignUp />},
    {path: '/signin', element: <SignIn />},
    {
        element: <ProtectedRoute />,
        children: [
            {path: '/app', element: <SectorSelector />},
            {path: '/app/mining', element: "mining sector dashboard"},
        ]
    },

    // {path: '/me', element: <App />}

])
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import SectorSelector from "./pages/app/SectorSelector";
import Dashboard from "./pages/app/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import AppLayout from "./layouts/AppLayout";

export const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/signup', element: <SignUp /> },
  { path: '/signin', element: <SignIn /> },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <AppLayout />,
        children: [
          { path: '/app', element: <Dashboard /> },
          { path: '/app/dashboard', element: <Dashboard /> },
          { path: '/app/sectors', element: <SectorSelector /> },
          { path: '/app/mining', element: <div className="p-6 text-slate-300">Mining Sector Details</div> },
        ],
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import Templates from "../pages/Templates";
import Contact from "../pages/Contact";
import UserDash from "../pages/UserDash";
import ProtoflioTheme from "../themes/ProtoflioTheme";
import Dashboard from "../pages/Dashboard";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div className="text-white">Error</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/templates",
        element: <Templates />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/user-dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/user-dashboard/:id",
        element: <UserDash />,
      },
    ],
  },
  {
    path: "/user-dashboard/:id/theme",
    element: <ProtoflioTheme />,
  },
]);

export default route;

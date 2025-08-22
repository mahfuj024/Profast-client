import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Error from "../Pages/Shared/Error/Error";
import Home from "../Pages/Home/Home/Home";
import AuthenticationLayouts from "../Layouts/AuthenticationLayouts";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayouts,
        errorElement: <Error></Error>,
        children: [
            {index : true, Component : Home}
        ]
    },
    {
        path : "/",
        Component : AuthenticationLayouts,
        children : [
            {path : "login", Component : Login},
            {path : "register", Component : Register},
        ]
    }
]);
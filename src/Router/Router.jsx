import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Error from "../Pages/Shared/Error/Error";
import Home from "../Pages/Home/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayouts,
        errorElement: <Error></Error>,
        children: [
            {index : true, Component : Home}
        ]
    },
]);
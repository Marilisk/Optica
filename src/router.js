import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "./Components/MainPage/MainPage";
import { Women } from "./Components/Women/Women";

export const router = createBrowserRouter([

    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/women",
        element: <Women />,
    },

]);
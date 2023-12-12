import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Skill from "../Components/Skill/Skill";
import Contact from "../Components/Contact/Contact";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/skill',
                element: <Skill></Skill>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }

        ]
    },
]);



export default Router;
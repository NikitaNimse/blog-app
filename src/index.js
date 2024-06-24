import ReactDOM from "react-dom/client";
import Home from "./views/Home/Home"
import BlogView from "./views/BlogView/BlogView";
import{
 createBrowserRouter,
 RouterProvider,
} from "react-router-dom"

import BlogCard from "./components/Blogcard/Blogcard";


const root = ReactDOM.createRoot(document.getElementById("root"))
const router =  createBrowserRouter([
    {
        path:"/",
        element:< Home/>
    },
    {
        path:"/blog/:id",
        element:<BlogView/>
    },


])
root.render(<RouterProvider router={router}/>)
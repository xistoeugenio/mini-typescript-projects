import { AccordionButton } from "react-bootstrap";
import { createBrowserRouter, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Store from "./pages/Store";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/Store",
    element:<Store/>
  },
])
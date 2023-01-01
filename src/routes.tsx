import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Todo from "./pages/todo/Todo";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />
    }, 
    {
        path: "/todo",
        element: <Todo />
    }
])

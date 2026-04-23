import ReactDOM from "react-dom/client";
import AppLayout from "./components/AppLayout";
import { createBrowserRouter, Route } from "react-router-dom";
import About from "./components/About";
import { RouterProvider } from "react-router-dom";
import Contact from "./components/ContactUs";
import ErrorPage from "./components/Error";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement:<ErrorPage/>
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path:"/contact",
    element:<Contact/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

import ReactDOM from "react-dom/client";
import AppLayout from "./components/AppLayout";
import { createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import { RouterProvider } from "react-router-dom";
import Contact from "./components/ContactUs";
import ErrorPage from "./components/Error";
import Body from "./components/Body";
import ResMenu from "./components/ResMenu";
import { lazy, Suspense, useEffect, useState } from "react";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import appStore   from "../utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      { 
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading Grocery...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <ResMenu />,
      },
    ],
  },
]);

const App = () => {
  const [userName, setUserName] = useState("Guest");

  useEffect(() => {
    // Simulate Auth API Call

    const data = {
      name: "Durjoy Ghosh",
    };

    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
    <UserContext.Provider
      value={{
        loggedInUser: userName,
        setLoggedInUser: setUserName,
      }}
    >
      <RouterProvider router={appRouter} />
    </UserContext.Provider>
    </Provider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(<App />);
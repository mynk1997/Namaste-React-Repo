import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";

const About = lazy(()=>import("./component/About"))
const Contact = lazy(()=>import("./component/Contact"))

const App = () => {
  return (
    <>
      <Header />
      <Outlet/>
    </>
  );
};

const appRouter= createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<Error/>,
    children:[
      {
        path: "/",
        element: <Body/>
      },
    {
      path: "/about",
      element: <Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>,
    },
    {
      path: "/contact",
      element: <Suspense fallback={<h1>Loading...</h1>}><Contact/></Suspense>,
    },
    {
      path: "/restaurant/:resId",
      element:<RestaurantMenu/>
    }]
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

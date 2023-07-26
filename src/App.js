import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";
import UserContext from "./utils/UserContext";

const About = lazy(()=>import("./component/About"))
const Contact = lazy(()=>import("./component/Contact"))

const App = () => {
  const [userName, setUserName] = useState();
  useEffect(()=>{
    const data={
      name: "Mayank Gupta"
    };
    setUserName(data.name);
  },[])
  return (
    <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
    <>
      <Header />
      <Outlet/>
    </>
    </UserContext.Provider>
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

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { About } from "./About";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { Homelayout } from "./HomeLayout";
import { HomeParams } from "./HomeParams";
import { HomeStuf } from "./HomeStuff";
import { Layout } from "./Layout";
import { Login } from "./Login";
export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homelayout />,
        children: [
          { index: true, element: <Home /> },
          { path: "stuff", element: <HomeStuf /> },
          { path: ":id", element: <HomeParams /> }
        ]
      },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> }
    ]
  },
  { path: "/login", element: <Login /> }
]);

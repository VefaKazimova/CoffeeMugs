import React from "react";
import Home from "../pages/Home";
import OurProducts from "../pages/OurProducts";
import Blog from "../pages/Blog";
import About from "../pages/About";
import Contact from "../pages/Contact";
import StyleGuide from "../pages/StyleGuide";
import SinglePage from "../pages/SinglePage";

const MyRoutes = [
  {
    id: 1,
    path: "/",
    element: <Home />,
    title: "Home Page",
  },
  {
    id: 2,
    path: "/ourproducts",
    element: <OurProducts />,
    title: "Products Page",
  },
  {
    id: 3,
    path: "/blog",
    element: <Blog />,
    title: "Blog Page",
  },
  {
    id: 4,
    path: "/about",
    element: <About />,
    title: "About Page",
  },
  {
    id: 5,
    path: "/contact",
    element: <Contact />,
    title: "Contact Page",
  },
  {
    id: 6,
    path: "/styleguide",
    element: <StyleGuide />,
    title: "StyleGuide Page",
  },
  {
    id: 7,
    path: "/singlepage/:sId",
    element: <SinglePage />,
    title: "Single Page",
  },
];
export default MyRoutes;

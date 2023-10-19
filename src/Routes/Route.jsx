import { createBrowserRouter } from "react-router-dom";

import Main from "../Layouts/Main";
import AboutSection from "../pages/AboutSection/AboutSection";
import Blogs from "../pages/BlogSection/Blogs";
import ContactUs from "../pages/ContactUs/ContactUs";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import ComingSoon from "../shared/ComingSoon/ComingSoon";

import Career from "../pages/Career/Career";
import JobPost from "../pages/JobPost/JobPost";

import FocusAreas from "../pages/FocusAreas/FocusAreas";
import SeniorDeveloper from "../pages/JobPost/SeniorDeveloper";
import UXDesigner from "../pages/JobPost/UXDesigner";
import SingleService from "../pages/SingleService/SingleService";
import OurServices from "../pages/Home/OurServices";
import Digital from "../pages/JobPost/Digital";
import Gallery from "../pages/Company/Gallery/Gallery";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "about",
        element: <AboutSection></AboutSection>,
      },
      {
        path: "ComingSoon",
        element: <ComingSoon></ComingSoon>,
      },

      {
        path: "contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "ourServices",
        element: <OurServices></OurServices>,
      },
      {
        path: "singleService/:id",
        element: <SingleService></SingleService>,
        
      },
      
      {
        path: "career",
        element: <Career></Career>,
      },
      {
        path: "jobPost",
        element: <JobPost></JobPost>,
      },
      {
        path: "seniorDeveloper",
        element: <SeniorDeveloper></SeniorDeveloper>,
      },
      {
        path: "UXDesigner",
        element: <UXDesigner></UXDesigner>,
      },
      {
        path: "digital",
        element: <Digital></Digital>,
      },
      {
        path: "gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "focusarea",
        element: <FocusAreas></FocusAreas>,
      },
    ],
  },
]);

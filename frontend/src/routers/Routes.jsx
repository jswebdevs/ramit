import { createBrowserRouter } from "react-router-dom";

import Root from "../layout/Root";

//pages
import Homepage from "../pages/Homepage";
import Errorpage from "../pages/Errorpage";
import Admin from "../pages/Admin";
import AboutUs from "../pages/AboutUs";
import Courses from "../pages/Courses";
import SingleCourse from "../components/SingleCourse";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import AccountPage from "../pages/AccountPage";


const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "admin",
        element: <Admin></Admin>,
      },
      {
        path: "about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "courses",
        element: <Courses></Courses> 
      },
      {
        path: "courses/:title",
        element: <SingleCourse></SingleCourse>
      },
      {
        path: 'register',
        element : <RegisterPage></RegisterPage>
      },
      {
        path: 'login',
        element: <LoginPage></LoginPage>
      },
      {
        path: 'account',
        element: <AccountPage></AccountPage>
      }
    ],
  },
]);

export default Routes;

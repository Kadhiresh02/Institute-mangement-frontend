import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../MainPage/mainpage';
import PagenotFound from '../layout/PagenotFound';
import HomeComp from '../MainPage/HomeComp';
import AboutUsComp from '../MainPage/AboutUsComp';
import BatchesComp from '../MainPage/BatchesComp';
import AllCoursesComp from '../MainPage/AllCoursesComp';
import ContactUsComp from '../MainPage/ContactUsComp';
import RegisterComp from '../LoginAndRegister/RegisterComp';
import LoginComp from '../LoginAndRegister/LoginComp';


const routing = createBrowserRouter([
    
    { path: '', element: <MainPage /> ,children:[
      {path:'',element:<HomeComp />},
      {path:'AboutUs',element:<AboutUsComp/>},
      {path:'Batches',element:<BatchesComp/>},
      {path:'AllCourses',element:<AllCoursesComp/>},
      {path:'ContactUs',element:<ContactUsComp/>},
      {path:'Login',element:<LoginComp/>},
      {path:'Register',element: <RegisterComp/>}
    ] },
    { path: '*', element: <PagenotFound /> },
  ]);
  
  export default routing;
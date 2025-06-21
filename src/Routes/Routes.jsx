import React from 'react';
import {
  createBrowserRouter,

} from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import MyBookings from '../pages/MyBookings/MyBookings';
import Blogs from '../pages/Blogs/Blogs';
import ContactUs from '../pages/ContactUs/ContactUs';
import DoctorDetails from '../pages/DoctorDetails/DoctorDetails';


export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
   {
    index: true,
    loader:()=>fetch('/doctorsData.json'),
    path:"/",
    Component:Home

   },
   {

    path:'/my-bookings',
     loader:()=>fetch('/doctorsData.json'),
    Component:MyBookings,



   },
   {
    path:'/blogs',
    loader:()=>fetch('/public/more_react_questions.json'),
    Component:Blogs,

   },
   {

    path:'/contactUs',
    Component:ContactUs,

   },
   {

    path:'/doctorDetails/:registrationNumber' ,
    loader:()=>fetch('/doctorsData.json'),
    Component:DoctorDetails,

   },
  

    ]
  },

  
]);
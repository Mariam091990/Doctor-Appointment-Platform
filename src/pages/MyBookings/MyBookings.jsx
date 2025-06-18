import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredDoctor } from '../../utility/addToDB';

const MyBookings = () => {

const [bookList, setBookList]=useState ([])

const data = useLoaderData();
// console.log(data);

useEffect (()=>{

const storedDoctorData = getStoredDoctor ();
    //  console.log ( storedDoctorData);
 const bookingsList = data.filter (datum =>storedDoctorData.includes(datum.registrationNumber) )
 setBookList(bookingsList);

}, [] )

    return (
        <div>
           <h1>booking :{bookList.length}</h1> 
        </div>
    );
};

export default MyBookings;
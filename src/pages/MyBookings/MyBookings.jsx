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

        <div className='my-15'>
           <h1 className='text-2xl text-center'>My Today Appointment</h1>
           <p className='text-xs text-center'> Our platform connects you with verrifed and experience Doctors-- All at your convenience</p> 
        </div>
        
        <div>
                {


                    bookList.map((singleBooked)=><div className='my-15 border-2 rounded-full p-15 border-gray-300'
                    key={singleBooked.registrationNumber}>
                    <div className='flex gap-5'>
                    <div> <img src={singleBooked?.image} alt="" /></div>
                    
                    <div>
                    <h1 className='text-xl'>{singleBooked?.name}</h1>
                    <h1 className='text-xs'>{singleBooked?.speciality}</h1>
                    
                     <h1 className='text-xs'>Consultation Fee: 750 BDT (<span className='text-shadow-xs'>+vat</span>)</h1> 
                    </div></div>
                    <br />
                    <div className='border-t-1 border-dashed'></div> <br />
                    

                    <button className='btn btn-block text-red-500 border-red-500 text-center rounded-3xl'> Cancel Appointment</button>


                   

                    </div>)

                 }


            {/* <h1>{datum?.name}</h1>
            <h1>speciality</h1>
             <h1>fee</h1> */}

        </div>
        
        
        
        </div>
        
    );
};

export default MyBookings;
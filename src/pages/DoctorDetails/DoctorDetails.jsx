import React from 'react';
import {   Link, useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDB';

const DoctorDetails = () => {
   const {registrationNumber}= useParams();
    const data = useLoaderData ();
    const singleDoctor = data.find (doctor => doctor.registrationNumber===registrationNumber );
    // console.log(singleDoctor);

    const handleMarkedAsBooked = registrationNumber => {
       addToStoredDB(registrationNumber)
    }

    return (
        <div className=''>
        <div className='border rounded-2xl text-center mt-10 p-5 mb-6'>
            <h1 className='text-2xl'>Doctor's Profile Detils</h1>
            <p className='text-xs'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo doloribus vitae iusto adipisci. Debitis perspiciatis delectus dolore soluta. Harum, dicta?</p>
        </div>
         <div className='flex gap-6'>
            <div><img src={singleDoctor?.image} alt="" /></div>
            <div>
        <h1 className='text-xl text-black'></h1>
        <ul className='text-xm'>
                <li> Education:{singleDoctor?.education}</li>
                <li>Working Field:{singleDoctor?.speciality}</li>
                <li>Experience: +{singleDoctor?.experience}</li>
        </ul>
        <br />
        
        <div className='border-t-1 border-dashed'></div>
            <h1>{singleDoctor?.registrationNumber}</h1>
        <div className='border-t-1 border-dashed'></div>
        <br />

        <h1 className='mx-1'> Availability <span className='border rounded-xl p-1 bg-amber-500 text-white'> Sunday </span>  <span className='border rounded-xl p-1 ml-1 bg-amber-500 text-white' >Monday</span> <span className='border rounded-xl p-1  bg-amber-500 text-white'>Friday</span></h1>

        Consultation Fee: Taka 273 (Incl Vat) per consultation  
           
           
           
            </div>


         </div>
        
    <div className='mt-10 border-1 rounded-2xl p-5'>
        <h1 className='text-2xl text-center'> Book an Appoinment</h1>

        <div className='border-t-1 border-dashed'> </div>
        <br />
        <div className='flex gap-62 px-4'>
          <button className='btn btn-ghost rounded-2xl w-[20%]  bg-amber-400'>Availability</button>  
          <button className='btn btn-ghost rounded-2xl w-[40%] bg-amber-400'>Doctor Available Today</button>  
        </div>
        <br />
        <div className='border-t-1 border-dashed'> </div>
       <Link to='/my-bookings'><button onClick={()=>handleMarkedAsBooked(registrationNumber)} className='btn btn-block mt-2 rounded-2xl bg-blue-500 text-white'>Book Appointment Now</button></Link> 
           </div>    
        </div>
    );
};

export default DoctorDetails;<h1>hi here my details</h1>
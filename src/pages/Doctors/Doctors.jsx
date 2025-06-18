import React, { Suspense } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = ({data}) => {
// console.log(data);


    return (
        <div>
             <h1 className='text-3xl bold text-center'>Our Best Doctors</h1> 
             <p className='text-sm text-center mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sint ex aut, perferendis pariatur quam voluptates laboriosam voluptatem. Modi, nulla.</p>
            
            <div className='grid grid-cols-3 gap-4'>
            {
                
             data.map((singleDoctor)=><Doctor key={singleDoctor.registrationNumber} singleDoctor ={singleDoctor} ></Doctor>)

            


            }
            
            </div>
            
        </div>
    );
};

export default Doctors;
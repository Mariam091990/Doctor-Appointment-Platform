import React, { Suspense, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = ({data}) => {
console.log(data);

  const [showAll, setShowAll] = useState(false);

//   // Control how many cards to show
      const visibleDoctors = showAll ? data : data.slice(0, 6);


    return (
        <div>
             <h1 className='text-3xl bold text-center'>Our Best Doctors</h1> 
             <p className='text-sm text-center mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sint ex aut, perferendis pariatur quam voluptates laboriosam voluptatem. Modi, nulla.</p>
            
           
  
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
              
                
           visibleDoctors .map((singleDoctor)=><Doctor key={singleDoctor.registrationNumber} singleDoctor ={singleDoctor} ></Doctor>)

            


            } </div>

    {/* Toggle Button */}
      {data.length > 6 && (
        <div className="col-span-full text-center m-4">
          <button onClick={() => setShowAll(!showAll)} className="btn btn-primary">{showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
           
           
            
        </div>
    );
};

export default Doctors;
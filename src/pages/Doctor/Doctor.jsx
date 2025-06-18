import React from 'react'; 
import { Link } from 'react-router';
// import sampleImage from '../../assets/C001-assets/doctor-sample.png'

const Doctor = ({singleDoctor}) => {
    //  console.log(singleDoctor);


    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="p-1 mb-5">
    <img
      src={singleDoctor?.image}
      alt="doctor"
      className="rounded-xl object-fill" />
  </figure>
  <div className='flex gap-2.5 ml-10'>
    <button className='border rounded-2xl w-[30%] text-xs text-blue-700 p-3'>available</button>
  <button className='border rounded-2xl w-[40%] text-blue-700 text-xs'>+{singleDoctor?.experience} Experience</button></div>
  <br />
  
  
  <div className="ml-10 text-xs">
  <h2 className="card-title ">{singleDoctor?.name}</h2>
  <p>{singleDoctor?.education} <br /> {singleDoctor?.speciality}</p>
  <br />
  <div className='border-t-1 border-dashed'></div>
  <br />
  <p> reg No:{singleDoctor?.registrationNumber}</p>
  <br />
  <div className="card-actions item-center mb-6">
    <Link to={`/doctorDetails/${singleDoctor?.registrationNumber}`}><button className="btn bg-white text-blue-700 border-[#2d3ded] rounded-2xl px-30">View Details</button></Link>
  </div>
  </div>
</div>
        </div>
    );
};

export default Doctor;
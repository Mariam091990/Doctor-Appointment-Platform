import React from 'react';

import banner1 from '../../assets/C001-assets/banner-img-1.png'
// import banner2 from '../../assets/C001-assets'

const Banner = () => {
    return (
        <div className=''>
            <div className='mb-5'><p className='text-3xl text-center bold'>Dependable Care, Backed by Trusted Professionals. </p>
            <br />
            
            <p className='text-sm text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p></div>
<div className='mb-5 text-center'>
<input type="text" placeholder="Search any Doctor" className="input" />
<button className='btn btn-ghost ml-4 rounded-full'> Search Now</button>

</div>

<div className='flex gap-3 mb-10'>

<img src={banner1} alt="" />
<img src={banner1} alt="" />
</div>

        </div>
    );
};

export default Banner;
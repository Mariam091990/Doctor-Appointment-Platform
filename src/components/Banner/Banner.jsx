import React from 'react';

import banner1 from '../../assets/C001-assets/banner-img-1.png'
// import banner2 from '../../assets/C001-assets'

const Banner = () => {
    return (
        <div className=''>
            <div className='mb-5'><p className='text-3xl text-center bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, dolorum </p>
            <br />
            
            <p className='text-sm text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus adipisci, laboriosam inventore officia totam officiis dicta soluta! Nesciunt, commodi ipsum.</p></div>
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
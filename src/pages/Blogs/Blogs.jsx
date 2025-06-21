import React from 'react';
import { useLoaderData } from 'react-router';
import { SlCalender } from "react-icons/sl";

const Blogs = () => {

const reactQuestions = useLoaderData()
console.log(reactQuestions);

    return (
        <div>
            <div className='text-center m-10'><h1 className='text-3xl'>Blogs</h1>
          <p className='text-xl'> Lets Explore some basic conceptions that make u good Developer</p> </div>
            
           {

            reactQuestions.map((singleQues)=>  <div key={singleQues.id}>
                
            <div className='border rounded-xl p-3 m-2 '>
                <li>{singleQues.question}</li>
                Answer: <br />
                <div className='border-dashed border-t-2 border-b-2 '>
                <p>{singleQues.answer}</p></div>

                <p className='text-xs mt-1.5 flex gap-2'><SlCalender />Added at 2023-11-12</p>
               

                
            </div>

            </div>         
            )

           }
        </div>
    );
};

export default Blogs;
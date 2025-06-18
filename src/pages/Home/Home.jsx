import React from 'react';
import Banner from '../../components/Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Doctor from '../Doctor/Doctor';
import { useLoaderData } from 'react-router';
const Home = () => {
  const data = useLoaderData();
  // console.log(data);
    return (
        <div>
          <Banner></Banner>
          <Doctors data = {data}></Doctors>
          <Doctor></Doctor>
        </div>
    );
};

export default Home;
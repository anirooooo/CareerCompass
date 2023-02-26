import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import HomePage from './HomePage';
import OneInputCarousel from './OneInputCarousel';

function LandingPage() {
  // const [firstTime, setFirstTime] = useState(false);

  // useEffect(() => {
  //   const visitedBefore = localStorage.getItem('visitedBefore');
  //   if (visitedBefore) {
  //     setFirstTime(false);
  //     console.log("Here false")
  //   } else {
  //     localStorage.setItem('visitedBefore', 'true');
  //     setFirstTime(true);
  //     console.log("Here true")
  //   }
  // }, []);
  // if(firstTime){
    return (
      <>
        <Navbar/>
         <OneInputCarousel />
      </>
    )
  // }else{
  //   return(<><Navbar/></>);
  // }
  
}

export default LandingPage;

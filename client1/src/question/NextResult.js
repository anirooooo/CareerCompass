import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './theme.css'
const NextResult = () => {
  const {state} = useLocation();
  return (
    <aside className='center '>
  <header>

    <h2>
            Suggestions
          </h2>

  </header>
  <div className='profile-card' style={{padding:'10px', backgroundColor:"whitesmoke",color:"black", overflowY:"scroll",float:"right"}}>{state}</div>
</aside>
  )
}

export default NextResult;

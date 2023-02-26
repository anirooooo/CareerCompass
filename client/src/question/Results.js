import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import tally from '../helpers/tally';
import NextResult from './NextResult';
import io from 'socket.io-client'; // Add this


const Results = ({ userAnswers, score, restartQuiz }) => {
  const socket = io.connect('http://localhost:4000'); // Add this -- our server will run on port 4000, so we connect to it from here
  const [result,setResult] = useState(false)
  // const [res, setRes] = useState("")
  // useEffect(()=>{
    
  // },[])
  
  const handleSubmit = (userAnswers) => {
    // Send the form data as a JSON object to the server
    fetch('http://localhost:5000/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*'
      },
      body: JSON.stringify(userAnswers)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
  };
  useEffect(() => {
    // Connect to the server using Socket.IO
    // const socket = io('http://localhost:4000');
    if (userAnswers !== '' ) {
      handleSubmit(userAnswers);
      setResult(true)
    }
    // Listen for a "response" event from the server
    
    // socket.on(('response', function(msg){
    //   console.log('Received message: ' + msg);
    //   setResult(true);
    //   setRes(msg);
    // }))

    // Disconnect from the server when the component unmounts
    // 
  }, );
  // const joinRoom = () => {
    
    
  // };
  return (
    <NextResult restartQuiz={restartQuiz}/>
  );
}

Results.propTypes = {
  userAnswers: PropTypes.array.isRequired,
  score: PropTypes.number.isRequired,
  restartQuiz: PropTypes.func.isRequired
};

export default Results;

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import tally from '../helpers/tally';
import io from 'socket.io-client'; // Add this


const NextResult = ({restartQuiz}) => {
//   const socket = io.connect('http://localhost:4000'); // Add this -- our server will run on port 4000, so we connect to it from here
  const [result,setResult] = useState(false)
  const [res, setRes] = useState("")
  let [socket, setSocket] = useState(null)
//   useEffect(() => setSocket(io('http://localhost:4000'), []))
  useEffect(() => {
    if(!socket) return;
    debugger
    socket.on('response', (recv) =>{
        debugger
        try{
            // Process recv message here
            console.log(recv);
        }catch(err){
            console.log(err)
        }
    }, [socket])
  })
//   useEffect(() => {
//     // Connect to the server using Socket.IO
//     // const socket = io('http://localhost:4000');
//     // joinRoom();
//     // Listen for a "response" event from the server
    
//     socket.on(('response', function(msg){
//         debugger
//       console.log('Received message: ' + msg);
//       setResult(true);
//       setRes(msg);
//     }))

//     // Disconnect from the server when the component unmounts
//     // return () => {
//     //   socket.disconnect();
//     // };
//   }, );
//   const joinRoom = () => {
//     if (userAnswers !== '' ) {
//       socket.emit('join_room',  userAnswers);
      
      
//     }
//   if(result){
  return (
    <div className="results-container">
      <h1>Quiz Results</h1>
      {res}
      {/* <div>You answered...</div> */}
      {/* {userAnswers.map(item => (
        <div key={Object.keys(item)[0]}>
          <p>Key: {Object.keys(item)[0]}</p>
          <p>Name: {item[Object.keys(item)[0]]}</p>
        </div>
      ))} */}
      {/* {oneTry}
      {twoTries}
      {threeTries}
      {fourTries} */}
      {/* <div className="results-total">Your Total Score is <strong>{score}</strong>.</div> */}
      <a onClick={restartQuiz}>Restart Quiz</a>
    </div>
  )
//   else{
//     return(<div className="results-container">
//     <h1>Quiz Results</h1>
//     {res}
//     {/* <div>You answered...</div> */}
//     {/* {userAnswers.map(item => (
//       <div key={Object.keys(item)[0]}>
//         <p>Key: {Object.keys(item)[0]}</p>
//         <p>Name: {item[Object.keys(item)[0]]}</p>
//       </div>
//     ))} */}
//     {/* {oneTry}
//     {twoTries}
//     {threeTries}
//     {fourTries} */}
//     {/* <div className="results-total">Your Total Score is <strong>{score}</strong>.</div> */}
//     <a onClick={restartQuiz}>Restart Quiz</a>
//   </div>)}
}

export default NextResult;

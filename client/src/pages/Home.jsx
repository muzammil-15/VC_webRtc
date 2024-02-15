import React, { useCallback, useEffect, useState } from 'react';
import { useSocket } from '../providers/Socket';

const Homepage = () => {

  const [emailId, setEmailId] =useState()
  const [roomId, setRoomId] =useState()

  const { socket } = useSocket();
  // console.log(useSocket)

  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      console.log(emailId, roomId)
      socket.emit("join-room", { emailId, roomId });
    },
    [emailId, roomId, socket]
  );

  return (
    <div className='home-container'>
      <div className='input-container'>
        <input value={emailId} onChange={(e)=> setEmailId(e.target.value)} type="email" placeholder='Enter your email' />
        <input value={roomId} onChange={(e)=> setRoomId(e.target.value)} type="text" placeholder='Enter room code' />
        <button onClick={handleSubmitForm}>Enter Room</button>
      </div>
    </div>
  );
}

export default Homepage;

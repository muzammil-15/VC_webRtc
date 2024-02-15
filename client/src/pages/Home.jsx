import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

const Homepage = () => {
  const [roomId, setRoomId] = useState();
  // const [userName, setUserName] = useState();

  const navigate = useNavigate();
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if(!roomId){
      alert("please enter room number") 
      return
    } 
    navigate(`/room/${roomId}`)
    console.log(roomId);
  };

  return (
    <div className="home-container">
      <div className="main">
        <h1>Your Gateway to Seamless Live Streaming</h1>
      <p>Streamify is a cutting-edge live streaming web application designed to empower content creators, educators, businesses, and event organizers to effortlessly broadcast their content to a global audience in real-time. With Streamify, you can easily create, schedule, and manage live streams with just a few clicks.</p>
      </div>
      
      <form action="submit">
        <div className="input-container">
          <input
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            type="text"
            placeholder="Enter room code"
            required
          />
          {/* <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="username"
          /> */}
          <button onClick={handleSubmitForm} type="submit">
            Enter Room
          </button>
        </div>
      </form>
    </div>
  );
};

export default Homepage;

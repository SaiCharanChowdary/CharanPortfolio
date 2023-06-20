import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Passionate Developer",
          "Frontend Enthusiast",
          "JavaScript Enthusiast",
          "React Lover",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        
      }}
      
    />
    
  );
}

export default Type;
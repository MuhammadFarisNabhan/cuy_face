import React from "react";

function Navheader() {
  return (
    <header className="text-center">
      <h1
        className="text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-green-400 to-yellow-500 text-transparent bg-clip-text shadow-lg inline-block"
        style={{ filter: "drop-shadow(0 0 10px rgba(235, 70, 50, 0.7))" }}
      >
        CUYFACE | PREDICT YOUR FACE
      </h1>
      <p className="text-gray-300">Ramal berdasarkan foto selfie kalian</p>
    </header>
  );
}

export default Navheader;

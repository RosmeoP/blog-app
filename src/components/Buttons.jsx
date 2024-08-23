import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <button 
        onClick={onClick}
        className="relative w-full h-14 px-4 py-2 text-white font-bold text-lg rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-800 hover:scale-105 transition-transform duration-300"
      >
        <span>{children}</span>
        <div className="absolute top-4 left-4 w-1 h-1 bg-white rounded-full animate-blink"></div>
        <div className="absolute top-6 left-16 w-1 h-1 bg-white rounded-full animate-blink animation-delay-3000"></div>
        <div className="absolute top-10 left-24 w-1 h-1 bg-white rounded-full animate-blink animation-delay-4000"></div>
        {/* Add more star divs here with different positions and delays */}
      </button>
    </div>
  );
};

export default Button;


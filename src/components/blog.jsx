import React from "react";
import Button from "./Buttons"; 
const Card = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <div className="p-5 w-[600px] min-h-[450px] rounded-2xl bg-transparent shadow-lg transition-transform duration-300 hover:-translate-y-2 border border-gray-800">
        <div className="relative min-h-[200px] bg-gray-700 rounded-xl shadow-inner">
          <img 
            src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606" 
            alt="Everest" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <p className="text-lg font-semibold text-green-300 mt-4 ml-2">
          Everest: The Pinnacle of Adventure
        </p>
        <p className="text-base text-gray-400 mt-3 ml-2">
          Standing at the base of Everest, one can't help but feel a profound sense of awe and anticipation. This towering giant, known as the highest peak in the world, has long been a beacon for adventurers and dreamers alike. The journey to its summit is more than just a physical challenge; it's a test of mental fortitude, perseverance, and the relentless human spirit.
        </p>
        <p className="text-sm text-gray-400 mt-7 ml-2 float-right">
          Written by <span className="font-semibold text-gray-300">John Snow</span> on <span className="text-gray-300">25/05/19</span>
        </p>
        <div className="mt-4">
          <Button />
        </div>
      </div>
      
    </div>
  );
};

export default Card;



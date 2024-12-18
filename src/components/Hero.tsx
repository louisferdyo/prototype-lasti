import React from 'react';
import { Utensils } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#7FBF5E] to-[#005C3D] text-white font-Nunito">
      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Utensils size={56} className="text-[#85b943]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold mb-6 font-nunito">
            Transform Your Diet with <span className="text-orange-400 font-extrabold">FoodFix</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-lora">
            Personalized diet plans, nutritional facts, supportive community, and many more.
          </p>
          <a href='/calculate'>
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-orange-500 hover:text-emerald-700 transition duration-300 font-nunito" >
                Calculate your nutrition!
            </button>
          </a>
        </div>
      </div>
      {/* <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-green-100 to-transparent"></div> */}
    </div>
  );
};
import React from 'react';
import { Utensils } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#8EB486] to-[#685752] text-[#FDF7F4] font-Nunito">
      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Utensils size={56} className="text-[#FDF7F4]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold mb-6 font-nunito">
            Transform Your Diet with <span className="text-[#A8CD89] font-extrabold">FoodFix</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-lora">
            Personalized diet plans, nutritional facts, supportive community, and many more.
          </p>
          <a href='/login'>
            <button className="bg-[#FDF7F4] text-[#685752] px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#8EB486] hover:text-[#FDF7F4] transition duration-300 font-nunito">
                Start Now
            </button>
          </a>
        </div>
      </div>
      {/* <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-green-100 to-transparent"></div> */}
    </div>
  );
};
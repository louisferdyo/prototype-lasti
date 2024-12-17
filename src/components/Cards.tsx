import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

export const Cards = ({ title, description, icon: Icon, link }: CardProps) => {
  return (
    <a
      href={link}
      className="bg-[#d4edd8] rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:bg-[#17412d] hover:-translate-y-1 group"
    >
      <div className="flex flex-col items-center text-center">
        <div className="p-3 bg-[#004c30] rounded-full mb-4 group-hover:bg-green-200 transition-colors">
          <Icon className="w-8 h-8 text-orange-500" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-white font-nunito">{title}</h3>
        <p className="text-gray-800 group-hover:text-white font-nunito">{description}</p>
      </div>
    </a>
  );
};

import React from 'react';
import { type LucideIcon } from 'lucide-react';

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
      className="bg-[#8EB486] rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:bg-[#685752] hover:-translate-y-1 group"
    >
      <div className="flex flex-col items-center text-center">
        <div className="p-3 bg-[#FDF7F4] rounded-full mb-4 group-hover:bg-[#8EB486] transition-colors">
          <Icon className="w-8 h-8 text-[#685752] group-hover:text-[#FDF7F4]" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-[#5a4d49] group-hover:text-[#FDF7F4] font-nunito">{title}</h3>
        <p className="text-[#5a4d49] group-hover:text-[#FDF7F4] font-nunito">{description}</p>
      </div>
    </a>
  );
};


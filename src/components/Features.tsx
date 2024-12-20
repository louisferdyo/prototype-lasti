import React from 'react';
import { Cards } from './Cards';
import { Calculator, Apple, Calendar, Users } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      title: 'Diet Scheduling',
      description: 'Get customized weekly meal and activity plans made to your schedule and preferences',
      icon: Calendar,
      link: ''
    },
    {
      title: 'Nutrition Calculator',
      description: 'Discover the nutritional facts of your food',
      icon: Calculator,
      link: '/calculate'
    },
    {
      title: 'Diet Information',
      description: 'Access our list of up to date articles',
      icon: Apple,
      link: ''
    },
    {
      title: 'Community',
      description: 'discuss with our supportive community of people on their journey to a healthier lifestyle',
      icon: Users,
      link: ''
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <Cards key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  );
};
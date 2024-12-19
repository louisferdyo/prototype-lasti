'use client'

import React, { useState } from 'react';
import { Utensils, Apple, Calculator, Calendar, Users } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup submitted:', { fullName, email, password, confirmPassword });
    router.push('/login');
  };

  const SignupForm = () => (
    <div className="w-full max-w-md">
      <h2 className="text-3xl font-bold text-[#685752] mb-8">
        Create your FoodFix account
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-[#685752] mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-4 py-2 border border-[#997C70] rounded-lg focus:ring-2 focus:ring-[#8EB486] focus:border-[#8EB486] transition-colors"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#685752] mb-1">
            Email address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-[#997C70] rounded-lg focus:ring-2 focus:ring-[#8EB486] focus:border-[#8EB486] transition-colors"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-[#685752] mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-[#997C70] rounded-lg focus:ring-2 focus:ring-[#8EB486] focus:border-[#8EB486] transition-colors"
            placeholder="Create a password"
            required
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#685752] mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 border border-[#997C70] rounded-lg focus:ring-2 focus:ring-[#8EB486] focus:border-[#8EB486] transition-colors"
            placeholder="Confirm your password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 rounded-lg font-semibold bg-[#8EB486] text-[#FDF7F4] hover:bg-[#685752] transition-all duration-300"
        >
          Create Account
        </button>

        <div className="text-center mt-4">
          <span className="text-[#685752]">Already have an account?</span>{' '}
          <a href="/login" className="text-[#8EB486] hover:text-[#685752] font-medium">
            Sign in
          </a>
        </div>
      </form>
    </div>
  );

  const GraphicSection = () => (
    <div className="relative z-10 text-white max-w-3xl p-8">
      <div className="text-center mb-12">
        <Utensils size={64} className="mx-auto mb-2" />
        <h1 className="text-6xl text-[#A8CD89] font-extrabold">FoodFix</h1>
        <h2 className="text-5xl font-bold mb-2">Transform Your Diet</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-[#FDF7F4]">
        <div className="flex items-center space-x-4 bg-white/10 rounded-lg p-4">
          <Calculator className="w-12 h-12 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-lg">Nutrition Calculator</h3>
            <p className="opacity-80">Discover the nutritional facts of your food</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 bg-white/10 rounded-lg p-4">
          <Calendar className="w-12 h-12 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-lg">Meal Planning</h3>
            <p className="opacity-80">Schedule your weekly meals and exercises</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 bg-white/10 rounded-lg p-4">
          <Users className="w-12 h-12 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-lg">Community</h3>
            <p className="opacity-80">Discuss with our supportive community</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 bg-white/10 rounded-lg p-4">
          <Apple className="w-12 h-12 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-lg">Diet Information</h3>
            <p className="opacity-80">Discover our articles</p>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-nunito">
      {/* Form Section */}
      <div className="w-full md:w-[40%] bg-[#FDF7F4] flex items-center justify-center p-4 md:p-8 order-2 md:order-1">
        <SignupForm />
      </div>
      {/* Graphic Section */}
      <div className="hidden md:flex w-[60%] bg-gradient-to-br from-[#8EB486] to-[#685752] items-center justify-center relative overflow-hidden order-1 md:order-2">
        <GraphicSection />
      </div>
      {/* Mobile Header */}
      <div className="md:hidden w-full bg-gradient-to-br from-[#8EB486] to-[#685752] p-8 text-center order-1">
        <Utensils size={48} className="mx-auto mb-2 text-white" />
        <h1 className="text-4xl text-[#A8CD89] font-extrabold">FoodFix</h1>
        <h2 className="text-2xl text-white font-bold mb-2">Transform Your Diet</h2>
      </div>
    </div>
  );
}
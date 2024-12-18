'use client'
import React, { useState } from 'react';
import { Utensils, Apple, Calculator, Calendar, Users } from 'lucide-react';

export default function Signup () {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup submitted:', { fullName, email, password, confirmPassword });
  };

  return (
    <div className="min-h-screen flex font-nunito">
      <div className="w-[40%] bg-[#FDF7F4] flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Create your FoodFix account
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                placeholder="Create a password"
                required
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                placeholder="Confirm your password"
                required
              />
            </div>
 
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg font-semibold bg-green-500 text-white hover:bg-emerald-600 transition-all duration-300"
            >
              Create Account
            </button>

            <div className="text-center mt-4">
              <span className="text-gray-600">Already have an account?</span>{' '}
              <a href="/login" className="text-green-600 hover:text-emerald-700 font-medium">
                Sign in
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="w-[60%] bg-gradient-to-br from-[#7FBF5E] to-[#005C3D] flex items-center justify-center relative overflow-hidden">
        <div className="relative z-10 text-white max-w-3xl p-8">
          <div className="text-center mb-12">
            <Utensils size={64} className="mx-auto mb-2" />
            <h1 className="text-6xl text-orange-400 font-extrabold">FoodFix</h1>
            <h2 className="text-5xl font-bold mb-2">Transform Your Diet</h2>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-12">
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
      </div>
    </div>
  );
};
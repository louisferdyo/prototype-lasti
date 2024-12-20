'use client';

import React from 'react';
import { useState, useCallback } from 'react';
import { fetchNutritionInfo } from './openai';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

interface NutritionInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export default function NutritionCalculator() {
  const [foodName, setFoodName] = useState('');
  const [portion, setPortion] = useState(1);
  const [nutritionInfo, setNutritionInfo] = useState<NutritionInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFoodNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFoodName(e.target.value);
  }, []);

  const handlePortionChange = useCallback((value: number[]) => {
    setPortion(value[0]);
  }, []);

  const handlePortionInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= 10) {
      setPortion(value);
    }
  }, []);

  const handleCalculate = useCallback(async () => {
    try {
      setError(null); // Reset error
      if (!foodName.trim()) {
        setError('Please enter a valid food name.');
        return;
      }

      // Ambil data nutrisi dari OpenAI API
      const nutrition = await fetchNutritionInfo(foodName);
      console.log("nutrition:",nutrition)
      // Hitung nutrisi berdasarkan porsi
      const calculatedNutrition: NutritionInfo = {
        calories: Math.round(nutrition.calories * portion),
        protein: Math.round(nutrition.protein * portion * 10) / 10,
        carbs: Math.round(nutrition.carbs * portion * 10) / 10,
        fat: Math.round(nutrition.fat * portion * 10) / 10,
      };

      setNutritionInfo(calculatedNutrition);
    } catch (err:any) {
      console.error(err);
      setNutritionInfo(null);
      setError(err.message || 'Failed to fetch nutrition data. Please try again.');
    }
  }, [foodName, portion]);

  return (
    <>
    <Navbar/>
    <div className="w-screen h-screen min-h-screen bg-gradient-to-br from-[#FDF7F4] to-[#b6e9ac] p-6 flex items-center justify-center font-nunito">
      <div className="flex flex-col md:flex-row gap-6 md:gap-12">
        <div className="bg-transparent rounded-lg p-6 md:px-14 md:py-10 w-full md:w-1/2">
          <form className="space-y-6">
            <h1 className="text-3xl font-bold mb-6 text-center lg:text-left text-[#5A6C57]">Nutrition Calculator</h1>
            <div>
              <Label htmlFor="foodName" className="text-[#525B44] text-xl font-bold">Food Name</Label>
              <Input
                id="foodName"
                type="text"
                placeholder="Enter food name"
                value={foodName}
                onChange={handleFoodNameChange}
                className="text-gray-800"
              />
            </div>
            <div>
              <Label htmlFor="portion" className="text-[#525B44] text-xl font-bold">Portion</Label>
              <div className="flex items-center space-x-6">
                <Input
                  id="portion"
                  type="number"
                  min="0"
                  max="10"
                  step="1"
                  value={portion}
                  onChange={handlePortionInputChange}
                  className="w-20 text-gray-800"
                />
                <Slider
                  value={[portion]}
                  onValueChange={handlePortionChange}
                  max={10}
                  step={1}
                  className="flex-grow"
                />
              </div>
            </div>
            <Button type="button" onClick={handleCalculate} className="w-full bg-[#997C70] hover:bg-[#685752] text-white">Calculate</Button>
          </form>
        </div>
        <div className="bg-[#b2e2a8] p-6 md:px-14 md:py-10 rounded-lg shadow-md w-full md:w-1/2 font-nunito">
          <h2 className="text-2xl font-bold mb-4 text-[#525B44]">Nutrition Information</h2>
          <p className="text-[#525B44] mb-4">Enter food name and portion, then click the &quot;Calculate&quot; button to see nutrition information.</p>
          {error && <p className="text-red-600">{error}</p>}
          {nutritionInfo && (
            <div className="space-y-3">
              <p className="flex justify-between text-[#525B44]">
                <span>Calories:</span>
                <span className="font-semibold">{nutritionInfo.calories} cal</span>
              </p>
              <p className="flex justify-between text-[#525B44]">
                <span>Protein:</span>
                <span className="font-semibold">{nutritionInfo.protein} g</span>
              </p>
              <p className="flex justify-between text-[#525B44]">
                <span>Carbs:</span>
                <span className="font-semibold">{nutritionInfo.carbs} g</span>
              </p>
              <p className="flex justify-between text-[#525B44]">
                <span>Fat:</span>
                <span className="font-semibold">{nutritionInfo.fat} g</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

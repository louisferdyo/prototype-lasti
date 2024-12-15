'use client'

import { useState, useCallback } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

interface NutritionInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export default function NutritionCalculator() {
  const [foodName, setFoodName] = useState('')
  const [portion, setPortion] = useState(1)
  const [nutritionInfo, setNutritionInfo] = useState<NutritionInfo | null>(null)

  const handleFoodNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFoodName(e.target.value)
  }, [])

  const handlePortionChange = useCallback((value: number[]) => {
    setPortion(value[0])
  }, [])

  const handlePortionInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value)
    if (!isNaN(value) && value >= 0 && value <= 10) {
      setPortion(value)
    }
  }, [])

  const handleCalculate = useCallback(() => {
    // CONTOH
    const mockNutritionPer100g = {
      calories: 150,
      protein: 5,
      carbs: 20,
      fat: 8
    }

    const calculatedNutrition: NutritionInfo = {
      calories: Math.round(mockNutritionPer100g.calories * portion),
      protein: Math.round(mockNutritionPer100g.protein * portion * 10) / 10,
      carbs: Math.round(mockNutritionPer100g.carbs * portion * 10) / 10,
      fat: Math.round(mockNutritionPer100g.fat * portion * 10) / 10
    }

    setNutritionInfo(calculatedNutrition)
  }, [portion])

  return (
    <div className="w-screen h-screen min-h-screen bg-gradient-to-br from-[#85b943] to-[#004c30] p-4 flex items-center justify-center md:p-4">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        <div className=" p-4 md:px-20 md:py-8 after:rounded-lg w-full md:w-1/2 justify-between">
          <form className="space-y-4 md:space-y-6">
            <h1 className="text-3xl font-bold mb-6 text-center lg:text-left text-white">Nutrition Calculator</h1>
            <div>
              <Label htmlFor="foodName" className='text-[#A8CD89]'>Food Name</Label>
              <Input
                id="foodName"
                type="text"
                placeholder="Enter food name"
                value={foodName}
                onChange={handleFoodNameChange}
              />
            </div>
            <div>
              <Label htmlFor="portion" className='text-[#A8CD89]'>Portion</Label>
              <div className="flex items-center space-x-6">
                <Input
                  id="portion"
                  type="number"
                  min="0"
                  max="10"
                  step="1"
                  value={portion}
                  onChange={handlePortionInputChange}
                  className="w-20 text-white"
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
            <Button type="button" onClick={handleCalculate} className="w-full bg-orange-500">Calculate</Button>
          </form>
        </div>
        <div className="bg-[#85b943] p-4 md:px-20 md:py-8 rounded-lg shadow-sm w-full md:w-1/2">
          <h2 className="text-xl font-semibold mb-4">Nutrition Information</h2>
          <p className='text-white mb-4'>Enter food name and portion, then click the "Calculate" button to see nutrition information.</p>
          {nutritionInfo ? (
            <div className="space-y-2">
              <p className="flex justify-between">
                <span>Calories:</span>
                <span className="font-semibold">{nutritionInfo.calories}</span>
              </p>
              <p className="flex justify-between">
                <span>Protein:</span>
                <span className="font-semibold">{nutritionInfo.protein}g</span>
              </p>
              <p className="flex justify-between">
                <span>Carbs:</span>
                <span className="font-semibold">{nutritionInfo.carbs}g</span>
              </p>
              <p className="flex justify-between">
                <span>Fat:</span>
                <span className="font-semibold">{nutritionInfo.fat}g</span>
              </p>
            </div>
          ) : (
            // Reserve space
            <>
              <p className="flex justify-between">
                <span>Calories:</span>
                <span className="text-white">---</span>
              </p>
              <p className="flex justify-between">
                <span>Protein:</span>
                <span className="text-white">---</span>
              </p>
              <p className="flex justify-between">
                <span>Carbs:</span>
                <span className="text-white">---</span>
              </p>
              <p className="flex justify-between">
                <span>Fat:</span>
                <span className="text-white">---</span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}


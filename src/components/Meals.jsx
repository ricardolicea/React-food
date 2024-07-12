import {  useEffect } from "react";
import { useState } from "react";

import MealItem from "./MealItem";


export default function Meals() {
  async function fetchMealsFromBackend() {
    const response = await fetch("http://localhost:3000/meals");
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error("Failed to fetch meals");
      throw error;
    }
    return responseData;
  }

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      setMeals(await fetchMealsFromBackend());
    }
    fetchMeals();
  }, []);

  
  return (
    <>
      <ul id="meals">
        {meals.map((meal) => (
          <MealItem key={meal.id} meal={meal}/>
        ))}
      </ul>
    </>
  );
}

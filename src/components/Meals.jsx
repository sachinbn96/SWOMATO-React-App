// import { useEffect, useState } from "react";
import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

// this is used as a dependency in usecallback, you can't use empty object because
// it will be created every re-render causing infinite loop, hence it is created outside the component func
const requestConfig = {};

export default function Meals() {
  //   const [loadedMeals, setLoadedMeals] = useState([]);
  //   useEffect(() => {
  //     async function fetchMeals() {
  //       const response = await fetch("http://localhost:3000/meals");
  //       if (!response.ok) {
  //         //error handling
  //       }
  //       const meals = await response.json();
  //       setLoadedMeals(meals);
  //     }
  //     fetchMeals();
  //   }, []);

  // custom hook useHttp
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching Meals</p>;
  }

  if (error) {
    return <Error title="Failed to get meals" message={error} />;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}

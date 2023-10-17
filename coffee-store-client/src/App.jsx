import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCart from "./components/CoffeeCart";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees,setCoffees]= useState(loadedCoffees)

  return (
    <div className="m-20">
      <h1 className="text-2xl text-center text-cyan-500">
        Coffees{coffees.length}
      </h1>
      <div className="grid md:grid-cols-3 gap-4">
      {coffees.map((coffee) => (
        <CoffeeCart key={coffee._id}   coffees={coffees} setCoffees={setCoffees}    coffee={coffee}></CoffeeCart>
      ))}
      </div>
    </div>
  );
}

export default App;

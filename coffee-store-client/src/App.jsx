import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCart from "./components/CoffeeCart";

function App() {
  const coffees = useLoaderData();

  return (
    <div className="m-20">
      <h1 className="text-2xl text-center text-cyan-500">
        Coffees{coffees.length}
      </h1>
      <div className="grid md:grid-cols-3 gap-4">
      {coffees.map((coffee) => (
        <CoffeeCart key={coffee._id} coffee={coffee}></CoffeeCart>
      ))}
      </div>
    </div>
  );
}

export default App;

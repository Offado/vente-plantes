import React from "react";
import "../Styles/ShoppingList.css";
import { plantList } from "../Datas/plantList";
import PlantItem from "./PlantItem";

// Fonction pour afficher les plantes
function ShoppingList() {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );
  return (
    <div>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map(({id,cover,name,water,light}) => (
          // Composant enfant du composant parent ShoppingList
          <PlantItem 
            id={id}
            cover={cover}
            name={name}
            water={water}
            light={light}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

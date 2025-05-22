import React from "react";
import "../Styles/ShoppingList.css";
import { plantList } from "../Datas/plantList";
import PlantItem from "./PlantItem";

// Fonction pour afficher les catégories et les plantes
function ShoppingList() {
  // Afficher les catégories dans un tableau avec la méthode reduce
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );
  return (
    // Afficher les catégories et autres propriétés de plantList toujours utilisé la méthode map
    <div>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map(({id,cover,name,water,light}) => (
          // PlantItem est le composant enfant du composant parent ShoppingList
          // Les props du composant PlantItem deviennet des propriétés dans le composant parent
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

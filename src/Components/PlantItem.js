import React from "react";
import "../Styles/PlantItem.css";
import CareScale from "./CareScale";

// Fonction pour afficher les propriétés de plantList (Il est le composant enfant de ShoppingList)
function PlantItem({ id, name, water, light, cover }) {
  return (
    <li key={id} className="lmj-plant-item">
      <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
      {name}
      <div>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
}

export default PlantItem;

import React from "react";
import "../Styles/PlantItem.css";
import CareScale from "./CareScale";

// Fonction pour afficher le composant enfant CareScale et les propriétés de plantList
function PlantItem({ id, cover, name, water, light }) {
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

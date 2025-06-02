import React from "react";
import "../Styles/PlantItem.css";
import CareScale from "./CareScale";

// Fonction pour récupérer la valeur des props du composant enfant et les propriétés de plantList dans notre composant
function PlantItem({ cover, name, price, water, light }) {
  // Fonction d'ajout d'une plante
  function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix`)
  }
  return (
    // Récupérer la valeur des props et propriétés de plantList
    // Déclencher une alerte avec la fonction handleClick
    <li className="lmj-plant-item" onClick={() => handleClick(name)}>
      <span className="lmj-plant-item-price">{price}€</span>
      <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
      {name}
      <div>
        {/* CareScale est le composant enfant du composant parent PlantItem */}
        {/* Les props du composant CareScale deviennent des propriétés dans le composant parent */}
        <CareScale careType="water" scaleValue={water} /> 
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
}

export default PlantItem;

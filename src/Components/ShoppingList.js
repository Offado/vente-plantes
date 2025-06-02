import React, { useState } from "react";
import "../Styles/ShoppingList.css";
import { plantList } from "../Datas/plantList";
import PlantItem from "./PlantItem";
import Categories from "./Categories";

// Fonction pour afficher les catégories et les plantes
function ShoppingList({cart, updateCart}) {
  // Variable primitive des catégories
  const [activeCategory, setActiveCategory] = useState('');
  // Afficher les catégories dans un tableau avec la méthode reduce
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  // Fonction pour afficher un produit ajouté dans un panier
  function addToCart(name, price) {
    // Variable pour enregistré un produit dans le panier
    const currentPlantSaved = cart.find((plant) => plant.name === name)
    if(currentPlantSaved) {
      // Variable pour filtrer les produits par nom
      const cartFilteredCurrentPlant = cart.filter((plant) => plant.name !== name)
      // Mise à jour des produits ajouté dans le panier
      updateCart([
        ...cartFilteredCurrentPlant,
        {name, price, amount: currentPlantSaved.amount + 1}
      ])
    } else {
      updateCart([
        ...cart,
        {name, price, amount: 1}
      ])
    }
  }
  return (
    // Afficher les catégories et autres propriétés de plantList toujours utilisé la méthode map
    <div className="lmj-shopping-list">
      {/* Le composant categories est un composant enfant de ShoppingList */}
      {/* Ses props passent en propriétés dans le parent */}
      <Categories 
      categories={categories}
      activeCategory={activeCategory}
      setActiveCategory={setActiveCategory}
      />
      <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, price, water, light }) => (
          // PlantItem est le composant enfant du composant parent ShoppingList
          // Les props du composant PlantItem deviennent des propriétés dans le composant parent
          <div key={id}>
            <PlantItem
            id={id}
            cover={cover}
            name={name}
            water={water}
            light={light}
            price={price}
          />
          {/* Bouton pour ajouter les plantes dans un panier */}
          <button onClick={() => addToCart(name, price)}>Ajouter</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

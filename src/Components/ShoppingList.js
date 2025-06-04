import React, { useEffect, useState } from "react";
import "../Styles/ShoppingList.css";
import { plantList } from "../Datas/plantList";
import PlantItem from "./PlantItem";
import Categories from "./Categories";
import "../Styles/Btn-addToCart.css";

// Fonction pour afficher les catégories et les plantes
function ShoppingList({ cart, updateCart }) {
  // Variable primitive des catégories
  const [activeCategory, setActiveCategory] = useState("");

  // Afficher les catégories dans un tableau avec la méthode reduce
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  // Fonction pour ajouter une plante dans un panier
  function addToCart(name, price) {
    // Variable pour enregistrer une plante dans le panier
    const currentPlantSaved = cart.find((plant) => plant.name === name);
    if (currentPlantSaved) {
      // Variable pour filtrer les plantes par nom en évitant les doublons
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      // Mise à jour des plantes filtrées dans le panier
      updateCart([
        ...cartFilteredCurrentPlant, // on fait un spread avec la variable pour copier tous les éléments du tableau
        { name, price, amount: currentPlantSaved.amount + 1 }, // on ajoute un nouvel objet représentant la plante actuelle
        // avec sa capacité (amount)
      ]);
    } else {
      // Ajout d'une plante dans le panier
      updateCart([...cart, { name, price, amount: 1 }]);
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
            <button
              className="btn-addToCart"
              onClick={() => addToCart(name, price)}
            >
              Ajouter
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

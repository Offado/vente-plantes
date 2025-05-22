import React from "react";
import Sun from "../assets/sun.svg"
import Water from "../assets/water.svg"


// Création d'un message d'alerte dans le composant CareScale à l'aide d'un objet
const quantityLabel = {
  1: 'peu',
  2: 'modérement',
  3: 'beaucoup'
}

// Fonction pour créer une échelle d'arrosage et de luminosité pour chaque plante
function CareScale({ scaleValue, careType }) {
  // Récupérer la valeur des props dans notre composant

  // Déclaration de la variable scaleType
  const scaleType = careType === "light" ? (    // careType est le paramètre des icônes
    <img src={Sun} alt="sun-icon" />
  ) : (
    <img src={Water} alt="water-icon" />
  )
  // Mettre les propriétés de l'objet quantityLabel dans un tableau
  const range = [1, 2, 3];
  return (
    <div
      onClick={() => 
        alert(
          `Cette plante requiert ${quantityLabel[scaleType]} ${careType === 'light' ? 'de lumière' : "d'arrosage"}`
        )
      }
    >
      {/* Afficher les éléments d'un tableau à l'aide de la méthode map */}
      {range.map((rangeElem) =>
      // scaleValue est le paramètre des valeurs
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;

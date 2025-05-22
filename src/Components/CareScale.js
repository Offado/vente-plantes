import React from "react";
import Sun from "../assets/sun.svg"
import Water from "../assets/water.svg"

// Fonction pour créer une échelle d'arrosage et de luminosité pour chaque plante
function CareScale({ scaleValue, careType }) {
  // récupérer la valeur des props dans notre composant
  const scaleType = careType === "light" ? (
    <img src={Sun} alt="sun-icon" />
  ) : (
    <img src={Water} alt="water-icon" />
  )

  const range = [1, 2, 3];
  return (
    <div>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;

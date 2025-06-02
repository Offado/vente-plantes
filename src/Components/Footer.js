import React, { useState } from "react";
import "../Styles/Footer.css";
import "../Styles/Btn-send.css";
import { RiPlantFill } from "react-icons/ri";
import { PiPlantFill } from "react-icons/pi";
import { PiPottedPlantFill } from "react-icons/pi";

function Footer() {
  // Récupérer le mail utilisateur avec la variable primitive
  const [inputValue, setInputValue] = useState("");
  // Fonction de mise à jour de l'input
  function handleInput(e) {
    setInputValue(e.target.value);
  }
  // Fonction d'alerte d'un mail utilisateur
  function handleBlur() {
    // Condition pour vérifier si la valeur existe dans la chaîne de caractères
    if (!inputValue.includes("@")) {
      alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide");
    }
  }
  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionné(e)s de plantes 
        <RiPlantFill size={20} style={{color: 'green'}} /> 
        <PiPlantFill size={20} style={{color: 'green'}} />
        <PiPottedPlantFill size={20} style={{color: 'green'}} />
      </div>
      <p>Laisser nous votre email:</p>
      <input
        value={inputValue} // affiche la valeur de la variable primitive
        onChange={handleInput} // sauvegarde la valeur de la variable primitive dans le state local useState
        onBlur={handleBlur} // affiche une alerte d'adresse utilisateur non valide
      />
      <button className="btn-send">Envoyer</button>
    </footer>
  );
}

export default Footer;

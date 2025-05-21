import React from "react";
import "../Styles/Cart.css";

function Cart() {
  // Variable des prix et produits dans le panier
  const MonsteraPrix = 8;
  const LierrePrix = 10;
  const FleurPrix = 15;
  return (
    <div className="lmj-cart">
      <h2>Panier</h2>
      <ul>
        <li>Monstera : {MonsteraPrix}€</li>
        <li>Lierre : {LierrePrix}€</li>
        <li>Fleur : {FleurPrix}€</li>
      </ul>
      Total : {MonsteraPrix + LierrePrix + FleurPrix}€
    </div>
  );
}

export default Cart;

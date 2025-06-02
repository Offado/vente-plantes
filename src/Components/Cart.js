import React, { useState } from "react";
import "../Styles/Cart.css";

function Cart({ cart, updateCart }) {
  // Variable pour calculer les prix et produits dans le panier
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );

  // Variable primitive permettant d'afficher le panier ou de le cacher
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
    <div className="lmj-cart">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      {/* Condition pour afficher le prix total d'un produit avec le nom du produit */}
      {cart.length > 0 ? (
        <div>
          <h2>Panier</h2>
          <ul>
            {cart.map(({ name, price, amount }, index) => (
              <div key={`${name}-${index}`}>
                {name} {price}€ x {amount}
              </div>
            ))}
          </ul>
          <h3>Total: {total}€</h3>
          <button onClick={() => updateCart([])}>Vider le panier</button>
        </div>
      ) : (
        <div>Votre panier est vide</div>
      )}
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(true)}
      >
        Ouvrier le panier
      </button>
    </div>
  );
}

export default Cart;

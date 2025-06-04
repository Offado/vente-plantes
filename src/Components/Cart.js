import React, { useEffect, useRef, useState } from "react";
import "../Styles/Cart.css";

function Cart({ cart, updateCart }) {
  // Variable pour calculer les prix et produits dans le panier
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );

  // Variable primitive permettant d'afficher le panier ou de le cacher
  const [isOpen, setIsOpen] = useState(true);

  // Supprimer une plante dans le panier
  const removeFomCart = (nameToRemove) => {
    updateCart((prevCart) =>
      prevCart.filter((item) => item.name !== nameToRemove)
    );
  };

  // Variable primitive pour afficher un message d'ajout au panier
  const [message, setMessage] = useState("");

  // Création d'une référence mutable
  const prevCart = useRef([]);

  // useEffect pour afficher deux messages du panier
  useEffect(() => {
    const previous = prevCart.current;
    const current = cart;

    // Produit ajouté
    if (current.length > previous.length) {
      const newItem = current.find(
        (item) => !previous.some((p) => p.name === item.name)
      );
      if (newItem) {
        setMessage(`Plante ajoutée: ${newItem.name}`);
      }
    }

    // Produit supprimé
    if (current.length < previous.length) {
      const removedItem = previous.find(
        (item) => !current.some((c) => c.name === item.name)
      );
      if (removedItem) {
        setMessage(`Produit supprimé : ${removedItem.name}`);
      }
    }

    prevCart.current = cart
  }, [cart]);

  // useEffect pour le temps des messages
  useEffect(() => {
    // Efface le message après 3 secondes
    const timer = setTimeout(() => {
      setMessage("");
    }, 3000);

    // Nettoyage du temps
    return () => clearTimeout(timer);
  }, [cart])

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
                <button onClick={() => removeFomCart(name)}>Supprimer</button>
              </div>
            ))}
          </ul>
          <h3>Total: {total}€</h3>
          <button onClick={() => updateCart([])}>Vider le panier</button>
        </div>
      ) : (
        <div>Votre panier est vide</div>
      )}

      {message && <div className="message">{message}</div>}
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

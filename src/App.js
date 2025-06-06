import logo from "./logo.svg";
import "./App.css";
import "../src/Styles/Layout.css";
import Banner from "./Components/Banner";
import Cart from "./Components/Cart";
import ShoppingList from "./Components/ShoppingList";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [cart, updateCart] = useState(() => {
    // Charger le panier depuis le localStorage ou au démarrage avec []
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Sauvegarder dans localStorage à chaque changement du panier
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="App">
      {/* Compposant pour afficher la barre de navigation */}
      <Banner />
      <div className="lmj-layout-inner">
        {/* Composant pour afficher la liste des plantes dans un panier */}
        <Cart cart={cart} updateCart={updateCart} />
        {/* Composant pour afficher la liste des plantes et catégories */}
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      {/* Composant pour afficher le pied de page */}
      <Footer />
    </div>
  );
}

export default App;

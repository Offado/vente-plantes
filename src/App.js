import logo from './logo.svg';
import './App.css';
import Banner from './Components/Banner';
import Cart from './Components/Cart';
import ShoppingList from './Components/ShoppingList';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
        <Banner />
        {/* <Cart /> */}
        <ShoppingList />
        <Footer />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Banner from './Components/Banner';
import Cart from './Components/Cart';
import ShoppingList from './Components/ShoppingList';

function App() {
  return (
    <div className="App">
        <Banner />
        <Cart />
        <ShoppingList />
    </div>
  );
}

export default App;

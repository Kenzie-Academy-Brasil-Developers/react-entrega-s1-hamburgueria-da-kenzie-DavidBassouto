import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import ProductList from "./components/ProductsList";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  function totalCart() {
    const totalPrice = currentSale.reduce((valorAnterior, acc) => {
      return acc.price + valorAnterior;
    }, 0);
    setCartTotal(totalPrice.toFixed(2));
  }
  useEffect(() => {
    totalCart();
  }, [currentSale]);

  function handleClick(id) {
    const findProd = products.find((item) => item.id === id);

    setCurrentSale([...currentSale, findProd]);
  }

  useEffect(() => {
    fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <ProductList products={products} handleClick={handleClick} />
        <Cart currentSale={currentSale} cartTotal={cartTotal} />
      </header>
    </div>
  );
}

export default App;

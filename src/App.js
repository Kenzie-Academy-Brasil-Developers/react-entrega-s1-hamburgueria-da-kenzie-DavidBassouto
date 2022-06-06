import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductList from "./components/ProductsList";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  //buscar prod na API
  useEffect(() => {
    fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);

  // filtrar prod pelo nome
  function handleFilter(textToSearch) {
    const filtedName = products.filter((prod) => {
      return (
        prod.name.toLowerCase().includes(textToSearch.toLowerCase()) ||
        prod.category.toLowerCase().includes(textToSearch.toLowerCase())
      );
    });
    setFilteredProducts(filtedName);
  }

  //Somar Total do Carrinho
  function totalCart() {
    const totalPrice = currentSale.reduce((valorAnterior, acc) => {
      return acc.price + valorAnterior;
    }, 0);
    setCartTotal(totalPrice.toFixed(2));
  }
  useEffect(() => {
    totalCart();
  }, [currentSale]);

  // add prod carrinho
  function handleClick(id) {
    const findProd = products.find((item) => item.id === id);

    setCurrentSale([...currentSale, findProd]);
  }

  // aparecer  oq esta prcurando
  const [valueSearch, setValueSearch] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <Header handleFilter={handleFilter} setValueSearch={setValueSearch} />
      </header>
      <main>
        {filteredProducts.length < 1 ? (
          <ProductList products={products} handleClick={handleClick} />
        ) : (
          <>
            <ProductList
              products={filteredProducts}
              handleClick={handleClick}
            />
          </>
        )}
        <Cart
          currentSale={currentSale}
          cartTotal={cartTotal}
          setCurrentSale={setCurrentSale}
        />
      </main>
    </div>
  );
}

export default App;

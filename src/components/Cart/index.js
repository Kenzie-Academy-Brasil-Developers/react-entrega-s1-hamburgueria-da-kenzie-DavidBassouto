import { CartProd } from "../CartProd";
import "./style.css";

function Cart({ currentSale, cartTotal, setCurrentSale}) {
  return (
    <div className="container__cart--tela">
      <h3>Carrinho de Compras</h3>
      <div className="container__cart--prod">
        {currentSale.map((eachCurrentSale) => (
          <CartProd
            eachCurrentSale={eachCurrentSale}
            key={eachCurrentSale.id}
          />
        ))}
      </div>

      <div className="container__cart--totalPrice">
        <p>Total</p> <span>R${cartTotal}</span>
      </div>
      <div className="container__cart--removeAll">
        <button onClick={()=> setCurrentSale([])} >Remover Todos</button>
      </div>
    </div>
  );
}

export default Cart;

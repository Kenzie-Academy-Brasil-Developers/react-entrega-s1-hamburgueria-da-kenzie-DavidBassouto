import { CartProd } from "../CartProd";
import "./style.css";

function Cart({ currentSale, cartTotal }) {
  return (
    <div className="container__cart--tela">
      {currentSale.map((eachCurrentSale) => (
        <CartProd eachCurrentSale={eachCurrentSale} key={eachCurrentSale.id} />
      ))}
      <div className="container__cart--totalPrice">
        <p>Total</p> <span>R${cartTotal}</span>
      </div>
      <div className="container__cart--removeAll">
        <button>Remover Todos</button>
      </div>
    </div>
  );
}

export default Cart;

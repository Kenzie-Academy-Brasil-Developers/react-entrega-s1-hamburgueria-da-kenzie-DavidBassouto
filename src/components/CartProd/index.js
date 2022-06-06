import "./style.css";

function CartProd({ eachCurrentSale }) {
  return (
    <div className="container__prodCarrinho">
      <div className="container__prodCarrinho--img">
        <img src={eachCurrentSale.img} alt={eachCurrentSale.name} />
      </div>
      <div className="container__prodCarrinho--info">
        <h4>{eachCurrentSale.name}</h4>
        <span>{eachCurrentSale.category}</span>
      </div>
      <div className="container__prodCarrinho--remover">
        <p>Remover</p>
      </div>
    </div>
  );
}

export { CartProd };

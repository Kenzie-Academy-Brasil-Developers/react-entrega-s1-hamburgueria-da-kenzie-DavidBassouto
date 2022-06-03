import "./style.css";
function Products({ eachProduct, handleClick }) {
  return (
    <div className="container__prods">
      <div className="container__img">
        <img src={eachProduct.img} alt={eachProduct.name} />
      </div>
      <div className="container__infoProd">
        <h2>{eachProduct.name}</h2>
        <span>{eachProduct.category}</span>
        <p>R${eachProduct.price.toFixed(2)}</p>
        <button onClick={() => handleClick(eachProduct.id)}>Adicionar</button>
      </div>
    </div>
  );
}

export default Products;

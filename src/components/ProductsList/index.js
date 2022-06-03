import Products from "../Products";
import "./style.css";

function ProductList({ products, handleClick }) {
  return (
    <div className="container__tela">
      {products.map((eachProduct) => (
        <Products eachProduct={eachProduct} key={eachProduct.id} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default ProductList;

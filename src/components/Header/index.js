import "./style.css";
import logo from "../../img/logo.svg";

function Header({ handleFilter, setValueSearch }) {
  // const [value, setValue]=useState('')
  return (
    <div className="container__header">
      <div className="container__header--img">
        <img src={logo} alt="Kenzie-Burguer" />
      </div>
      <div className="container__header--search">
        <div className="container__header--search_white">
          <input
            type="text"
            placeholder="Digite sua Busca"
            onChange={(event) => {
              setValueSearch(event.target.value)
              handleFilter(event.target.value)}}
          />
          <button>Pesquisar</button>
        </div>
      </div>
    </div>
  );
}

export default Header;

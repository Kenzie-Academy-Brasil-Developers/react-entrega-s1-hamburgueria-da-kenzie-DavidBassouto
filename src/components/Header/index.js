import "./style.css";


function Header({ handleFilter }) {
    // const [value, setValue]=useState('')
  return (
    <div className="container__header">
      <div className="container__header--img">
        <img src="img" alt="Kenzie-Burguer" />
      </div>
      <div className="container__header--search">
          <div className="container__header--search_white" >
        <input
          type="text"
          placeholder="Digite sua Busca"
          onChange={(event) => handleFilter(event.target.value)}
          />
        <button>Pesquisar</button>
          </div>
      </div>
    </div>
  );
}

export default Header;

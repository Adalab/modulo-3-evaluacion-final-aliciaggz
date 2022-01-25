import '../styles/Filters.scss';

function Filters(props) {
  const handleInput = (ev) => {
    props.handleFilter({
      value: ev.currentTarget.value,
      key: 'name',
    });
  };

  return (
    <form className="page__form">
      <div className="page__div">
        <label className="page__div--label" htmlFor="character">
          Buscar por personaje
        </label>
        <input
          className="page__div--input"
          type="text"
          onChange={handleInput}
          value={props.searchName}
        />
      </div>

      <div className="page__div">
        <select
          className="page__select"
          name=""
          id=""
          onChange={props.handleSearchName}
        >
          <option value="gryffindor">Gryffindor</option>
          <option value="slytherin">Slytherin</option>
          <option value="hufflepuff">Hufflepuff</option>
          <option value="ravenclaw">Ravenclaw</option>
        </select>
      </div>

      <div className="page__div">
        <select name="" id="">
          <option value="">Todos</option>
          <option value="">Mujer</option>
          <option value="">Hombre</option>
        </select>
      </div>
    </form>
  );
}

export default Filters;

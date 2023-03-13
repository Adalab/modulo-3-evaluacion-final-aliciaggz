import '../../styles/FilterName.scss';

function FilterName(props) {
  const handleInput = (ev) => {
    ev.preventDefault();
    props.handleFilter({
      value: ev.currentTarget.value,
      key: 'name',
    });
  };
  return (
    <div className="page__div">
      <label className="page__div--label" htmlFor="character">
        Buscar por personaje
      </label>
      <input
        className="page__div--input"
        type="text"
        onChange={handleInput}
        value={props.searchName}
        placeholder="Harry Potter"
      />
    </div>
  );
}

export default FilterName;

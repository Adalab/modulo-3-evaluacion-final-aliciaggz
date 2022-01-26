import '../styles/FilterGender.scss';

function FilterGender(props) {
  const handleInput = (ev) => {
    ev.preventDefault();
    props.handleFilter({
      value: ev.currentTarget.value,
      key: 'gender',
    });
  };
  return (
    <div className="page__div">
      <label className="page__label" htmlFor="gender">
        Género
      </label>
      <select
        className="page__selectGender"
        name=""
        id=""
        onChange={handleInput}
        value={props.filterGender}
      >
        <option value="all">Todos</option>
        <option value="female">Mujer</option>
        <option value="male">Hombre</option>
      </select>
    </div>
  );
}

FilterGender.propTypes = {};

export default FilterGender;

import '../../styles/FilterGender.scss';

function FilterGender(props) {
  const handleInput = (ev) => {
    ev.preventDefault();
    props.handleFilter({
      value: ev.currentTarget.value,
      key: 'gender',
    });
  };
  return (
    <div className="page__div--select">
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
        <option className="page__selectGender--option" value="all">
          Todos
        </option>
        <option className="page__selectGender--option" value="female">
          Mujer
        </option>
        <option className="page__selectGender--option" value="male">
          Hombre
        </option>
      </select>
    </div>
  );
}

FilterGender.propTypes = {};

export default FilterGender;

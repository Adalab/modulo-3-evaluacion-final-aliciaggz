import '../../styles/FilterHouse.scss';

function FilterHouse(props) {
  return (
    <div className="filters__house">
      <label className="filters__house--label" htmlFor="house">
        Buscar por casa
      </label>
      <select
        className="page__select"
        name="house"
        id="house"
        onChange={props.handleSearchName}
        value={props.searchHouse}
      >
        <option className="page__select--option1 s-c top" value="gryffindor">
          Gryffindor
        </option>
        <option className="page__select--option2 s-c top" value="slytherin">
          Slytherin
        </option>
        <option className="page__select--option3 s-c top" value="hufflepuff">
          Hufflepuff
        </option>
        <option className="page__select--option4 s-c top" value="ravenclaw">
          Ravenclaw
        </option>
      </select>
    </div>
  );
}

export default FilterHouse;

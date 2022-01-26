import '../styles/FilterHouse.scss';

function FilterHouse(props) {
  return (
    <div className="page__div">
      <select
        className="page__select"
        name="house"
        id="house"
        onChange={props.handleSearchName}
      >
        <option value="gryffindor">Gryffindor</option>
        <option value="slytherin">Slytherin</option>
        <option value="hufflepuff">Hufflepuff</option>
        <option value="ravenclaw">Ravenclaw</option>
      </select>
    </div>
  );
}

export default FilterHouse;

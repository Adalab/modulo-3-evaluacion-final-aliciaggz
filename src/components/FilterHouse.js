import '../styles/FilterHouse.scss';

function FilterHouse(props) {
  return (
    <div className="page__div">
      <select
        className="page__select"
        name="house"
        id="house"
        onChange={props.handleSearchName}
        value={props.searchHouse}
      >
        <option className="page__select--option s-c top" value="gryffindor">
          Gryffindor
        </option>
        <option className="page__select--option s-c top" value="slytherin">
          Slytherin
        </option>
        <option className="page__select--option s-c top" value="hufflepuff">
          Hufflepuff
        </option>
        <option className="page__select--option s-c top" value="ravenclaw">
          Ravenclaw
        </option>
      </select>
    </div>
  );
}

export default FilterHouse;

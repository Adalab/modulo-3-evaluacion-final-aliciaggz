function FilterStudent(props) {
  const handleInput = (ev) => {
    props.handleFilter({
      value: ev.currentTarget.checked,
      key: 'student',
    });
  };
  return (
    <div className="container__filter">
      <label className="container__filter--label" htmlFor="">
        Mostrar estudiantes de Hogwarts
      </label>
      <input
        className="container__filter--input"
        type="checkbox"
        name="order"
        id="order"
        onChange={handleInput}
        checked={props.filterStudent}
      />
    </div>
  );
}

export default FilterStudent;

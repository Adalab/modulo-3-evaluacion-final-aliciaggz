import '../../styles/FilterOrder.scss';

function FilterOrder(props) {
  const handleInput = (ev) => {
    props.handleFilter({
      value: ev.currentTarget.checked,
      key: 'order',
    });
  };

  return (
    <div className="container__filter">
      <label className="container__filter--label" htmlFor="">
        Ordenar por orden alfabetico
      </label>
      <input
        className="container__filter--input"
        type="checkbox"
        name="order"
        id="order"
        onChange={handleInput}
        checked={props.filterOrder}
      />
    </div>
  );
}

export default FilterOrder;

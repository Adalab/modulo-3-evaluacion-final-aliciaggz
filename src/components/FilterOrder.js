function FilterOrder(props) {
  const handleInput = (ev) => {
    props.handleFilter({
      value: ev.currentTarget.checked,
      key: 'order',
    });
  };

  return (
    <div>
      <label htmlFor="">Ordenar por orden alfabetico</label>
      <input
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

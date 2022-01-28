import '../styles/Filters.scss';
import FilterHouse from './FilterHouse';
import FilterName from './FilterName';
import FilterGender from './FilterGender';
import FilterOrder from './FilterOrder';
import FilterStudent from './FilterStudent';

function Filters(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <div className="page">
      <form className="page__form" onSubmit={handleSubmit}>
        <FilterHouse
          handleSearchName={props.handleSearchName}
          searchHouse={props.searchHouse}
        />
        <FilterName
          searchName={props.searchName}
          handleFilter={props.handleFilter}
        />
        <FilterGender
          handleFilter={props.handleFilter}
          filterGender={props.filterGender}
        />
        <FilterOrder
          handleFilter={props.handleFilter}
          filterOrder={props.filterOrder}
        />

        <FilterStudent
          handleFilter={props.handleFilter}
          filterStudent={props.filterStudent}
        />
      </form>
    </div>
  );
}

export default Filters;

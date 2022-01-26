import '../styles/Filters.scss';
import FilterHouse from './FilterHouse';
import FilterName from './FilterName';
import FilterGender from './FilterGender';

function Filters(props) {
  return (
    <form className="page__form">
      <FilterHouse handleSearchName={props.handleSearchName} />
      <FilterName
        searchName={props.searchName}
        handleFilter={props.handleFilter}
      />

      <FilterGender
        handleFilter={props.handleFilter}
        FilterGender={props.FilterGender}
      />
    </form>
  );
}

export default Filters;

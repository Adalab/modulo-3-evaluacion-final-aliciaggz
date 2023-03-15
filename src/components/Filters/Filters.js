import '../../styles/Filters.scss';
import FilterHouse from './FilterHouse';
import FilterName from './FilterName';
import FilterGender from './FilterGender';
import FilterOrder from './FilterOrder';
import FilterStudent from './FilterStudent';
import ButtonReset from '../ButtonReset';

function Filters(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <div className="page">
      <div className="line"></div>
      <form className="page__form" onSubmit={handleSubmit}>
        <div className="page__form--content">
          <div>
            <h3 className="page__form--title">Filters</h3>
            <FilterOrder
              handleFilter={props.handleFilter}
              filterOrder={props.filterOrder}
            />
            <FilterStudent
              handleFilter={props.handleFilter}
              filterStudent={props.filterStudent}
            />{' '}
          </div>
          <div className="page__form--divide">
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
            <ButtonReset handleButtonReset={props.handleButtonReset} />
          </div>
        </div>
      </form>
      <div className="line"></div>
    </div>
  );
}

export default Filters;

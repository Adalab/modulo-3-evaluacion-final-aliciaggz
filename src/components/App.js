import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import callToApi from '../services/api';
import CharacterList from './CharacterList';
import Filters from './Filters/Filters';
import CharacterDetail from './CharacterDetail';
import Error from './Error';
import Header from './Header';
import ErrorPage from './ErrorPage';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchHouse, setSearchHouse] = useState('gryffindor');
  const [filterGender, setFilterGender] = useState('all');
  const [filterOrder, setFilterOrder] = useState(false);
  const [filterStudent, setFilterStudent] = useState(false);

  useEffect(() => {
    callToApi(searchHouse).then((data) => {
      setCharacters(data);
    });
  }, [searchHouse]);

  const handleSearchName = (ev) => {
    setSearchHouse(ev.currentTarget.value);
  };

  //handle reset

  const handleButtonReset = () => {
    setSearchName('');
    setSearchHouse('gryffindor');
    setFilterGender('all');
    setFilterOrder(false);
    setFilterStudent(false);
  };

  const handleFilter = ({ key, value }) => {
    switch (key) {
      case 'name':
        setSearchName(value);
        break;
      case 'gender':
        setFilterGender(value);
        break;
      case 'order':
        setFilterOrder(value);
        break;
      case 'student':
        setFilterStudent(value);
        break;
      default:
        console.error(`Invalid key: ${key}`);
        break;
    }
  };

  //the filters

  const filterCharacters = characters
    .filter((eachCharacter) => {
      return eachCharacter.name
        .toLowerCase()
        .includes(searchName.toLowerCase());
    })
    .filter((eachCharacter) =>
      filterGender === 'all' ? true : eachCharacter.gender === filterGender
    )
    .filter((eachCharacter) => {
      return filterStudent ? eachCharacter.student : true;
    });

  if (filterOrder === true) {
    filterCharacters.sort((a, b) => {
      if (a.name < b.name) return -1;
      else if (a.name > b.name) return 1;
      return 0;
    });
  }

  //render

  const renderCharacterDetail = (props) => {
    const routeName = props.match.params.id;
    const foundCharacter = characters.find((eachCharacter) => {
      return eachCharacter.id === routeName;
    });

    return foundCharacter === undefined ? (
      <ErrorPage />
    ) : (
      <CharacterDetail eachCharacter={foundCharacter} />
    );
  };

  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Filters
              handleSearchName={handleSearchName}
              handleFilter={handleFilter}
              searchName={searchName}
              filterGender={filterGender}
              searchHouse={searchHouse}
              filterOrder={filterOrder}
              filterStudent={filterStudent}
              handleButtonReset={handleButtonReset}
            />

            {filterCharacters.length === 0 ? (
              <Error />
            ) : (
              <CharacterList characters={filterCharacters} />
            )}
          </Route>
          <Route path="/character/:id" render={renderCharacterDetail} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;

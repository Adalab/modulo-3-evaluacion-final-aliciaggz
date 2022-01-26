import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch, Link } from 'react-router-dom';
import callToApi from '../services/api';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import Error from './Error';
import Header from './Header';
import ButtonReset from './ButtonReset';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchHouse, setSearchHouse] = useState('gryffindor');
  const [filterGender, setFilterGender] = useState('all');

  useEffect(() => {
    callToApi(searchHouse).then((data) => {
      setCharacters(data);
    });
  }, [searchHouse]);

  const handleSearchName = (ev) => {
    setSearchHouse(ev.currentTarget.value);
  };

  //handler

  const handleButtonReset = () => {
    setSearchName('');
    setSearchHouse('gryffindor');
  };

  const handleFilter = (data) => {
    if (data.key === 'name') {
      setSearchName(data.value);
    } else if (data.key === 'gender') {
      setFilterGender(data.value);
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
    .sort((a, b) => {
      if (a.name < b.name) return -1;
      else if (a.name > b.name) return 1;
      return 0;
    });

  if (filterCharacters.length === 0) {
    return (
      //PREGUNTAS MAÑANA
      <Switch>
        <Route path="/error">
          <Error />;
        </Route>
      </Switch>
    );
  }
  //render

  const renderCharacterDetail = (props) => {
    const routeName = props.match.params.id;

    const foundCharacter = characters.find((eachCharacter) => {
      return eachCharacter.id === routeName;
    });

    return foundCharacter === undefined ? (
      <p>No encontrado</p>
    ) : (
      <CharacterDetail eachCharacter={foundCharacter} />
    );
  };

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Filters
            handleSearchName={handleSearchName}
            handleFilter={handleFilter}
            searchName={searchName}
            filterGender={filterGender}
          />
          <ButtonReset handleButtonReset={handleButtonReset} />
          <CharacterList
            characters={filterCharacters}
            searchName={searchName}
          />
        </Route>
        <Route path="/character/:id" render={renderCharacterDetail} />
      </Switch>
    </>
  );
};

export default App;

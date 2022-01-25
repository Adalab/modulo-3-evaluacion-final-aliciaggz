import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch, Link } from 'react-router-dom';
import callToApi from '../services/api';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import Error from './Error';
import logo from '../images/logo.png';
const App = () => {
  const [characters, setCharacters] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchHouse, setSearchHouse] = useState('gryffindor');

  useEffect(() => {
    callToApi(searchHouse).then((data) => {
      setCharacters(data);
    });
  }, [searchHouse]);

  const handleSearchName = (ev) => {
    setSearchHouse(ev.currentTarget.value);
  };
  const handleFilter = (data) => {
    setSearchName(data.value);
  };

  //the filters

  const filterCharacters = characters.filter((eachCharacter) => {
    return eachCharacter.name.toLowerCase().includes(searchName.toLowerCase());
  });

  //render

  const renderCharacterDetail = (props) => {
    const routeName = props.match.params.name;
    console.log(routeName);
    const foundCharacter = characters.find((eachCharacter) => {
      return eachCharacter.name === routeName;
    });
    console.log(foundCharacter);
    return foundCharacter === undefined ? (
      <Error />
    ) : (
      <CharacterDetail eachCharacter={foundCharacter} />
    );
  };

  return (
    <>
      <div className="page__div">
        <header className="page__header">
          <img className="page__header--img" src={logo} alt="" />
        </header>
      </div>
      <Switch>
        <Route exact path="/">
          <Filters
            handleSearchName={handleSearchName}
            handleFilter={handleFilter}
          />
          <CharacterList
            characters={filterCharacters}
            searchName={searchName}
          />
        </Route>
        <Route path="/character/:name" render={renderCharacterDetail} />
      </Switch>
    </>
  );
};

export default App;

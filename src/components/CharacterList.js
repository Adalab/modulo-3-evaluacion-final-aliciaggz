import CharacterCard from './CharacterCard';

function CharacterList(props) {
  const charactersInfo = props.characters.map((eachCharacter, index) => {
    return (
      <li key={index}>
        <CharacterCard eachCharacter={eachCharacter} />
      </li>
    );
  });
  return (
    <section>
      <ul>{charactersInfo}</ul>
    </section>
  );
}

export default CharacterList;

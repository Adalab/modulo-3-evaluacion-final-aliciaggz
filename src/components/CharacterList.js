import CharacterCard from './CharacterCard';
import '../styles/CharacterList.scss';

function CharacterList({ characters }) {
  const charactersInfo = characters.map((eachCharacter, index) => {
    return (
      <li className="section__list--li" key={index}>
        <CharacterCard eachCharacter={eachCharacter} />
      </li>
    );
  });
  return (
    <section className="section__list">
      <ul className="section__list--ul">{charactersInfo}</ul>
    </section>
  );
}

export default CharacterList;

import { Link } from 'react-router-dom';

function CharacterCard(props) {
  return (
    <>
      <Link to={`/character/${props.eachCharacter.name}`}>
        <img
          src={
            props.eachCharacter.image === ''
              ? 'https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter'
              : `${props.eachCharacter.image}`
          }
          alt={`Foto de ${props.eachCharacter.name}`}
        />
        <p>{props.eachCharacter.name}</p>
        <p>{props.eachCharacter.specie}</p>
      </Link>
    </>
  );
}

export default CharacterCard;

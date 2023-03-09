import { Link } from 'react-router-dom';
import '../styles/CharacterCard.scss';
function CharacterCard(props) {
  const getSpecie = () => {
    if (props.eachCharacter.specie === 'human') {
      return 'Humano';
    } else if (props.eachCharacter.specie === 'werewolf') {
      return 'Hombre Lobo';
    } else if (props.eachCharacter.specie === 'ghost') {
      return 'Fantasma';
    } else if (props.eachCharacter.specie === 'half-giant') {
      return 'Medio Gigante';
    }
  };
  return (
    <>
      <Link to={`/character/${props.eachCharacter.id}`}>
        <img
          className="card__img"
          src={
            props.eachCharacter.image === ''
              ? 'https://ae01.alicdn.com/kf/HTB1KqKqNFXXXXcwaXXXq6xXFXXXe/17-7-11-4CM-Stylish-Harry-Potter-Glasses-For-Car-Stickers-Interesting-Motorcycle-Vinyl-Decals-Black.jpg'
              : `${props.eachCharacter.image}`
          }
          alt={`Foto de ${props.eachCharacter.name}`}
        />

        <div className="card__text">
          <p className="card__text--name">{props.eachCharacter.name}</p>
          <p className="card__text--specie">{getSpecie()}</p>
        </div>
      </Link>
    </>
  );
}

export default CharacterCard;

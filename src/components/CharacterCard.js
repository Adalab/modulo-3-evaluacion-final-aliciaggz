import { Link } from 'react-router-dom';
import { getSpecie } from '../services/translateSpecies';
import '../styles/CharacterCard.scss';
function CharacterCard(props) {
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
          <p className="card__text--specie">
            {getSpecie(props.eachCharacter.specie)}
          </p>
        </div>
      </Link>
    </>
  );
}

export default CharacterCard;

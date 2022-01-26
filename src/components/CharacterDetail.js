import { Link } from 'react-router-dom';
import '../styles/CharacterDetail.scss';
import heartBeat from '../images/heart.png';
import heartDead from '../images/heartdead.png';
import gyffindorLogo from '../images/gryffindor.png';
import slytherinLogo from '../images/slitherin.png';
import ravenclawLogo from '../images/ravenclaw.png';
import hufflepuffLogo from '../images/hufflepuff.png';

function CharacterDetail(props) {
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

  const getGender = () => {
    return props.eachCharacter.gender === 'male' ? 'Hombre' : 'Mujer';
  };

  const getHouse = () => {
    if (props.eachCharacter.house === 'Gryffindor') {
      return `${gyffindorLogo}`;
    } else if (props.eachCharacter.house === 'Slytherin') {
      return `${slytherinLogo}`;
    } else if (props.eachCharacter.house === 'Hufflepuff') {
      return `${hufflepuffLogo}`;
    } else if (props.eachCharacter.house === 'Ravenclaw') {
      return `${ravenclawLogo}`;
    }
  };

  return (
    <div className="page__div2">
      <article className="article">
        <div className="article__div">
          <Link to="/">Volver</Link>
          <img
            className="article__img"
            src={
              props.eachCharacter.image === ''
                ? 'https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter'
                : `${props.eachCharacter.image}`
            }
            alt={`Foto de ${props.eachCharacter.name}`}
          />
        </div>
        <div className="article__aside">
          <p>{props.eachCharacter.name}</p>
          <p>
            Estatus:
            <img
              className="article__aside--imgHeart"
              src={
                props.eachCharacter.status === true
                  ? `${heartBeat}`
                  : `${heartDead}`
              }
              alt=""
            />
          </p>
          <p>Especie: {getSpecie()}</p>
          <p>Genero: {getGender()}</p>
          <img className="article__aside--imgHouse" src={getHouse()} alt="" />
        </div>
      </article>
    </div>
  );
}

export default CharacterDetail;

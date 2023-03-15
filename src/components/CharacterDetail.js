import { Link } from 'react-router-dom';
import '../styles/CharacterDetail.scss';
import heartBeat from '../images/heart.png';
import heartDead from '../images/heartdead.png';
import gyffindorLogo from '../images/gryffindor1.png';
import slytherinLogo from '../images/slitherin.png';
import ravenclawLogo from '../images/ravenclaw.png';
import hufflepuffLogo from '../images/hufflepuff1.png';

function CharacterDetail(props) {
  const speciesTranslations = {
    human: 'Humano',
    werewolf: 'Hombre Lobo',
    ghost: 'Fantasma',
    'half-giant': 'Medio Gigante',
  };
  const getSpecie = (characterSpecie) => speciesTranslations[characterSpecie];
  // const getSpecie = () => {
  //   if (props.eachCharacter.specie === 'human') {
  //     return 'Humano';
  //   } else if (props.eachCharacter.specie === 'werewolf') {
  //     return 'Hombre Lobo';
  //   } else if (props.eachCharacter.specie === 'ghost') {
  //     return 'Fantasma';
  //   } else if (props.eachCharacter.specie === 'half-giant') {
  //     return 'Medio Gigante';
  //   }
  // };

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
      <div className="article__a">
        <Link className="article__a--link" to="/">
          Volver
        </Link>
      </div>
      <article className="article">
        <div className="article__div">
          <div className="article__container">
            <p className="article__container--name">
              {props.eachCharacter.name}
            </p>
            <img
              className="article__container--imgHouse"
              src={getHouse()}
              alt=""
            />
          </div>

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
          <div className="article__text">
            <p className="article__text--status">
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
            <p className="article__text--specie">Especie: {getSpecie()}</p>
            <p className="article__text--gender">
              Género: {getGender(props.eachCharacter.specie)}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default CharacterDetail;

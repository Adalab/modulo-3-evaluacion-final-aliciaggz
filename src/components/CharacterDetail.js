import { Link } from 'react-router-dom';
import '../styles/CharacterDetail.scss';
import heartBeat from '../images/heart.png';
import heartDead from '../images/heartdead.png';
import gyffindorLogo from '../images/gryffindor1.png';
import slytherinLogo from '../images/slitherin.png';
import ravenclawLogo from '../images/ravenclaw.png';
import hufflepuffLogo from '../images/hufflepuff1.png';
import { getSpecie } from '../services/translateSpecies';
function CharacterDetail({ eachCharacter }) {
  const getGender = () => {
    return eachCharacter.gender === 'male' ? 'Hombre' : 'Mujer';
  };

  const getHouse = () => {
    if (eachCharacter.house === 'Gryffindor') {
      return `${gyffindorLogo}`;
    } else if (eachCharacter.house === 'Slytherin') {
      return `${slytherinLogo}`;
    } else if (eachCharacter.house === 'Hufflepuff') {
      return `${hufflepuffLogo}`;
    } else if (eachCharacter.house === 'Ravenclaw') {
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
            <p className="article__container--name">{eachCharacter.name}</p>
            <img
              className="article__container--imgHouse"
              src={getHouse()}
              alt=""
            />
          </div>

          <img
            className="article__img"
            src={
              eachCharacter.image === ''
                ? 'https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter'
                : `${eachCharacter.image}`
            }
            alt={`Foto de ${eachCharacter.name}`}
          />
        </div>
        <div className="article__aside">
          <div className="article__text">
            <p className="article__text--status">
              Estatus:
              <img
                className="article__aside--imgHeart"
                src={
                  eachCharacter.status === true
                    ? `${heartBeat}`
                    : `${heartDead}`
                }
                alt=""
              />
            </p>
            <p className="article__text--specie">
              Especie: {getSpecie(eachCharacter.specie)}
            </p>
            <p className="article__text--gender">Género: {getGender()}</p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default CharacterDetail;

import { Link } from 'react-router-dom';
import '../styles/CharacterDetail.scss';
import heartBeat from '../images/heartbeat.png';

function CharacterDetail(props) {
  return (
    <div className="page__div">
      <article className="article">
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
        <div className="article__aside">
          <p>{props.eachCharacter.name}</p>
          <p>
            Estatus:
            <img
              className="article__aside--imgHeart"
              src={
                props.eachCharacter.status === true ? `${heartBeat}` : 'Muerto'
              }
              alt=""
            />
          </p>
          <p>Especie:{props.eachCharacter.specie}</p>
          <p>Genero:{props.eachCharacter.gender}</p>
          <p>Casa: {props.eachCharacter.house}</p>
        </div>
      </article>
    </div>
  );
}

export default CharacterDetail;

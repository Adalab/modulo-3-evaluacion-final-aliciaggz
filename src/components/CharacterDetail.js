import { Link } from 'react-router-dom';

function CharacterDetail(props) {
  return (
    <div>
      <article>
        <Link to="/">Volver</Link>
        <img
          src={
            props.eachCharacter.image === ''
              ? 'https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter'
              : `${props.eachCharacter.image}`
          }
          alt={`Foto de ${props.eachCharacter.name}`}
        />
        <p>{props.eachCharacter.name}</p>
        <p>
          Estatus: {props.eachCharacter.status === true ? 'Vivo' : 'Muerto'}
        </p>
        <p>Especie:{props.eachCharacter.specie}</p>
        <p>Genero:{props.eachCharacter.gender}</p>
        <p>Casa: {props.eachCharacter.house}</p>
      </article>
    </div>
  );
}

export default CharacterDetail;

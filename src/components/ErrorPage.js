import { Link } from 'react-router-dom';

function Error(props) {
  return (
    <div>
      <p>La pagina solicitada no existe</p>

      <Link to="/">Volver</Link>
    </div>
  );
}

Error.propTypes = {};

export default Error;

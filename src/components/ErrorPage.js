import { Link } from 'react-router-dom';
import '../styles/ErrorPage.scss';

function Error(props) {
  return (
    <div className="page__error">
      <div className="page__error--text">
        {' '}
        <p className="text">La pagina solicitada no existe</p>
      </div>

      <Link className="button" to="/">
        Volver
      </Link>
    </div>
  );
}

Error.propTypes = {};

export default Error;

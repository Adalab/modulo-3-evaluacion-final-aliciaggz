import '../styles/Error.scss';

function Error(props) {
  return (
    <div className="page__error">
      <div className="page__error--text">
        <p className="text">Usuario no encontrado</p>
        <p className="text">Siga buscando...</p>
      </div>
    </div>
  );
}

Error.propTypes = {};

export default Error;

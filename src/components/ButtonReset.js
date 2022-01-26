import '../styles/ButtonReset.scss';

function ButtonReset(props) {
  const handleClick = () => {
    console.log('entra');
    props.handleButtonReset();
  };
  return (
    <div className="page__container">
      <button className="page__container--button" onClick={handleClick}>
        Reset
      </button>
    </div>
  );
}

export default ButtonReset;

import '../styles/ButtonReset.scss';

function ButtonReset({ handleButtonReset }) {
  const handleClick = () => {
    handleButtonReset();
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

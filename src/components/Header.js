import logo from '../images/logo.png';
function Header(props) {
  return (
    <div className="page__div">
      <header className="page__header">
        <img className="page__header--img" src={logo} alt="" />
      </header>
    </div>
  );
}

export default Header;

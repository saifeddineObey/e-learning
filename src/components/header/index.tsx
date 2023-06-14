import "./header.css";

const logo =  require("../../assets/icons/logo.png");

const Header = () => {
  return (
    <header className="header" data-testID="header">
      <img src={logo} alt="logo"  data-testID="logo" />
    </header>
  );
};

export default Header;

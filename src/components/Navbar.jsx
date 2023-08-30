import logo from '../images/ironhack-logo-xs.png';
import menu from '../images/menu-top-xs.png';

function Navbar() {
  return (
    <div className="NavbarLogos">
      <img src={logo} alt="Ironhack logo" />
      <img src={menu} alt="menu" />
    </div>
  );
}

export default Navbar;

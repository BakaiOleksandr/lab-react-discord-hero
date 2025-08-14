import menuIcon from '../assets/menu-icon.png';
import logoIcon from '../assets/discord-logo-white.png';
function Navbar() {
  return (
    <div className="navbar">
      <img src={logoIcon}></img>
      <img src={menuIcon} alt="menu icon"></img>
    </div>
  );
}

export default Navbar;

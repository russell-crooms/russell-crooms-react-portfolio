import './Navbar.css';
import Russell_logo_final from '../../assets/russell-logo-final.png';

const Navbar = () => {
  return (
    <div className="navbar">
        <img src={Russell_logo_final} alt="Russell" />
        <ul className="nav-menu">
            <li>Home</li>
            <li>About Me</li>
            <li>Skills</li>
            <li>Portfolio</li>
            <li>Contact Me</li>
        </ul>
        <div className="nav-connect">
            Connect With Me
        </div>
    </div>
  )
}

export default Navbar;

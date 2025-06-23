import logo from './images/dog_square.png';
import './logo.css';

function Logo() {
  return (
    <div className="app-logo-container">
      <img className="logo-image" src={logo} alt="Figura do logotipo do site" />
      <p className="logo-text">Parallax</p>
    </div>
  );
}

export default Logo;
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <div className='header'>
            <div className="header__content">
                <div className="header__logo-container">
                    <div className="header__logo-img-cont">
                        <img src="img/manish-icon.png" alt="Manish Ojha Logo Image" className="header__logo-img" />
                    </div>
                    <Link to="/" className="header__logo-sub">Manish Ojha</Link>
                </div>
                <div className="header__main">
                    <ul className="header__links">
                        <li className="header__link-wrapper">
                            <Link to="/" className="header__link">Home</Link>
                        </li>
                        <li className="header__link-wrapper">
                            <Link to="/about" className="header__link">About</Link>
                        </li>
                        <li className="header__link-wrapper">
                            <Link to="/projects" className="header__link">Projects</Link>
                        </li>
                        <li className="header__link-wrapper">
                            <Link to="/contact" className="header__link">Contact</Link>
                        </li>
                    </ul>

                </div>
            </div>
            {/* <nav className=''>

                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
            </nav> */}
        </div>
            
        
    )
}

export default NavBar;
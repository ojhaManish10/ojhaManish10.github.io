import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <div className='header'>
            <div class="header__content">
                <div class="header__logo-container">
                    <div class="header__logo-img-cont">
                        <img src="img/manish-icon.png" alt="Manish Ojha Logo Image" class="header__logo-img" />
                    </div>
                    <Link to="/" class="header__logo-sub">Manish Ojha</Link>
                </div>
                <div class="header__main">
                    <ul class="header__links">
                        <li class="header__link-wrapper">
                            <Link to="/" class="header__link">Home</Link>
                        </li>
                        <li class="header__link-wrapper">
                            <Link to="/about" class="header__link">About</Link>
                        </li>
                        <li class="header__link-wrapper">
                            <Link to="/projects" class="header__link">Projects</Link>
                        </li>
                        <li class="header__link-wrapper">
                            <Link to="/contact" class="header__link">Contact</Link>
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
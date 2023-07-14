import "./Airbnb.css"
import logo from "../../assets/logo/long-logo.png";


const Airbnb = () =>{
    return (
        <div className="navbar">
          <img src={logo} alt="logo" className="navbar-logo" />
          <div className="search-bar">
            <div className="search-bar-text">Anywhere</div>
            <div className="search-bar-text">Any Week</div>
            <div className="search-bar-text2">Add guests</div>
            <div className="search-icon-div">
            </div>
          </div>
          <div className="profile-container">
            <div className="airbnb-your-home">Airbnb your home</div>
            <div className="airbnb-your-home">
            </div>
            <div className="profile-div">
            </div>
          </div>
        </div>
      );
    }
export default Airbnb;
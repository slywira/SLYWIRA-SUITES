import "./Navbar.css";
import LogoImg from "../assets/logo.png";
import AnniversaryImage from "../assets/TenYears_Anniversary.png";

function Navbar({ navigate }) {
  return (
  
    
    <nav className="navbar">
      <img
                  className="anniversary-image"
                  src={AnniversaryImage}
                  alt="A view of Ten Anniversary"
                />
      <ul className="nav-list">
        <li className="home">Home</li>
        <li>
          <a
            href="#rooms"
            onClick={(event) => {
              event.preventDefault();
              navigate("rooms");
            }}
          >
            Rooms
          </a>
        </li>
        <li>
          <a
            href="#meetings-events"
            onClick={(event) => {
              event.preventDefault();
              navigate("meetings-events");
            }}
          >
            Meetings &amp; Events
          </a>
        </li>
        <li>Deals</li>
        <li className="culinary-menu" tabIndex={0}>
          Culinary
          <ul className="culinary-dropdown">
            <li>Catering</li>
            <li>
              <a
                href="#bar-and-restaurant"
                onClick={(event) => {
                  event.preventDefault();
                  navigate("bar-and-restaurant");
                }}
              >
                Bar and Restaurant
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <img src={LogoImg} alt="Slywira Suites" className="logo-mark" />
    <ul className="nav-list2">
    <li className="experiences">Experiences</li>
    <li className="facilities">Facilities</li>
    <li>Slywira Cares</li>
    

    <div className="Reward-program-btn">Reward Program
    <div className="signin-row">
    <a
      href="#signin"
      onClick={(event) => {
        event.preventDefault();
        navigate("signin");
      }}
    >
      SIGN IN
    </a>
    <span>|</span>
    <a
      href="#join"
      onClick={(event) => {
        event.preventDefault();
        navigate("join");
      }}
    >
      JOIN
    </a>
    </div>
    </div>
    </ul>
    </nav>
 
  );
}

export default Navbar;

import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <Nav pills id="navbar-container">
        <NavItem id="items">
        
          <Link to={'/science'} className="link">
            Scince
          </Link>
          <Link to={'/cartoons'}className="link">
            Cartoons
          </Link>
          <Link to={'/popular'} className="link">
            Popular
          </Link>
          <Link to={'/trending'} className="link">
            Trending
          </Link>
          <Link to={'/fantasy'} className="link">
            Fantasy
          </Link>
          <Link to={'/war-movies'} className="link">
            War
          </Link>
          <Link  className="login">
            Login
          </Link>
        </NavItem>
      </Nav>
    </div>
  )
}

export default Navbar;

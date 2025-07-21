import {
  Link,
} from "react-router-dom";

function NavBar() {
  return(
    <ul className="NavBar">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/links">Links</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="https://login.gabekan.dev">Login</Link></li>
    </ul>
  );
}

export default NavBar;



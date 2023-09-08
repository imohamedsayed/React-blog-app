import logo from "./logo.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="" />
        <h1>React.js Blog</h1>
      </div>
      <div className="navs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">New blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import logo from "./logo.svg";
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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/create">New blog</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

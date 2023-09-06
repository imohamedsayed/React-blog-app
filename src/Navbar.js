const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Blog</h1>
      </div>
      <div className="navs">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/create">Add blog</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

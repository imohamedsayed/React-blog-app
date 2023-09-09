import { Link } from "react-router-dom";
import notfound from "./notfound.svg";
const NotFound = () => {
  return (
    <div className="NotFound">
      <img src={notfound} alt="" />
      <h1>404 | Not Found</h1>
      <p>That page could not be found</p>
      <Link to="/">return to the homepage...</Link>
    </div>
  );
};

export default NotFound;

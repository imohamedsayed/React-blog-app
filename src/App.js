import Navbar from "./Navbar";
import Home from "./Home";
import Blog from "./Blog";
import AddBlog from "./AddBlog";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/create" element={<AddBlog />}></Route>
            <Route exact path="/blogs/:id" element={<Blog />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;

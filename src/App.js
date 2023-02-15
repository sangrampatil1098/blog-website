import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Setting from "./pages/setting/Setting";
import Single from "./pages/single/Single";
import Topbar from "./topbar/Topbar";
import Write from "./write/Write";
import Register from "./register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route
          exact
          path="/register"
          element={user ? <Home /> : <Register />}
        ></Route>
        <Route
          exact
          path="/login"
          element={user ? <Home /> : <Login />}
        ></Route>
        <Route
          exact
          path="/setting"
          element={user ? <Setting /> : <Register />}
        ></Route>
        <Route
          exact
          path="/write"
          element={user ? <Write /> : <Register />}
        ></Route>
        <Route exact path="/post/:postId" element={<Single />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

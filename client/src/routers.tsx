import { Route, Routes } from "react-router-dom";
import SinglePost from "./pages/SinglePost";
import Donate from "./pages/Donate";
import Home from "./pages/home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singlepage" element={<SinglePost />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Routers;

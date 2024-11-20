import { Route, Routes } from "react-router-dom";
import SinglePost from "./pages/SinglePost";
import Donate from "./pages/Donate";
import Home from "./pages/home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import SupporterForm from "./components/supporter/SupporterForm";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singlepage" element={<SinglePost />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/supporter" element={<SupporterForm />} />
      </Routes>
    </>
  );
};

export default Routers;

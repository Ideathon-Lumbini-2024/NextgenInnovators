import { Route, Routes } from "react-router-dom";
import SinglePost from "./pages/SinglePost";
import Donate from "./pages/Donate";
import Home from "./pages/home";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singlepage" element={<SinglePost />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </>
  );
};

export default Routers;

import { Route, Routes } from "react-router-dom";
import SinglePost from "./pages/SinglePost";
import Home from "./pages/home";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singlepage" element={<SinglePost />} />
      </Routes>
    </>
  );
};

export default Routers;

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/auth/Login";
import Home from "./pages/home";
import Register from "./components/auth/Register";

function App() {
  // TODO: Replace with actual auth check
  // const isAuthenticated = false;

  return (
    <Router>
      <Routes>
        {/* <Route 
          path="/" 
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />} 
        /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

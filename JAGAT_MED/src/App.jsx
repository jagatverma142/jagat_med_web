import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Subjects from "./pages/Subjects";
import Material from "./pages/Material";
import Practice from "./pages/Practice";
import Updates from "./pages/Updates";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/material" element={<Material />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

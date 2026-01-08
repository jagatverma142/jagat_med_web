import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import BiologyPage from "./Pages/BiologyPage";
import PhysicsPage from "./Pages/PhysicsPage";
import ChemistryPage from "./Pages/chemistryPage";
// import Subjects from "./pages/Subjects";
// import Material from "./pages/Material";
// import Practice from "./pages/Practice";
// import Updates from "./pages/Updates";
// import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biology" element={<BiologyPage />} />
        <Route path="/physics" element={< PhysicsPage />} />
        {/* <Route path="/material" element={<Material />} /> */}
        <Route path="/chemistry" element={<ChemistryPage />} />
        {/* <Route path="/updates" element={<Updates />} /> */}
   {/* <Route path="/login" element={<Login />} /> */}

      </Routes>
    </>
  );
}

export default App;

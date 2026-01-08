import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import './CSS/Navbar.css';
import Footer from "./Components/Footer";
import BiologyPage from "./Pages/BiologyPage";
import PhysicsPage from "./Pages/PhysicsPage";
import ChemistryPage from "./Pages/chemistryPage";
import NcertLineByLine from "./Pages/NcertLineByLine";
// import Subjects from "./pages/Subjects";
// import Material from "./pages/Material";
// import Practice from "./pages/Practice";
// import Updates from "./pages/Updates";
// import Login from "./pages/Login";
import HandwrittenNotes from "./Pages/HandwrittenNotes";

function App() {
  return (
    <>
    <div className="all">
       {/* Fix 1: Navbar container ko high z-index diya */}
      <div className="nav" style={{ position: 'relative', zIndex: 1000 }}>
        <Navbar />
      </div>
      



      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/biology" element={<BiologyPage />} />
        <Route path="/physics" element={< PhysicsPage />} />
        {/* <Route path="/material" element={<Material />} /> */}
        <Route path="/chemistry" element={<ChemistryPage />} />
        <Route path="/material/ncert" element={<NcertLineByLine />} />
        <Route path="/material/notes" element={<HandwrittenNotes />} />
   {/* <Route path="/login" element={<Login />} /> */}

      </Routes>


      <div className="footer">
        <Footer />
      </div>




    </div>
    
    
      
    </>
  );
}

export default App;

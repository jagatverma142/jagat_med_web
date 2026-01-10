import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import './CSS/Navbar.css';
import Footer from "./Components/Footer";
import BiologyPage from "./Pages/BiologyPage";
import ChemistryPage from "./Pages/chemistryPage";
import NcertLineByLine from "./Pages/NcertLineByLine";
import MindMapPage from "./Pages/MindMapPage";
import HandwrittenNotes from "./Pages/HandwrittenNotes";
import FormulaSheets from "./Pages/FormulaSheets";
import PhysicsPage from "./Pages/PhysicsPage";
import PYQPage from "./Pages/PYQPage";
import DailyMockTests from "./Pages/DailyMockTest";
import AllIndiaTestSeries from "./Pages/AllIndiaTestSeries";
import UpdatesPage from "./Pages/UpdatesPage";
import LoginPage from "./Pages/LoginPage";
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
        <Route path="/chemistry" element={<ChemistryPage />} />
        <Route path="/physics" element={<PhysicsPage />} />
        <Route path="/material/ncert" element={<NcertLineByLine />} />
        <Route path="/material/notes" element={<HandwrittenNotes />} />
        <Route path="/material/formulas" element={<FormulaSheets />} />
        <Route path="/material/mindmaps" element={<MindMapPage />} />
        <Route path="/practice/pyq" element={<PYQPage />} />
        <Route path="/practice/mock" element={<DailyMockTests />} />
        <Route path="/practice/aits" element={<AllIndiaTestSeries />} />
        <Route path="/updates" element={<UpdatesPage />} />
        <Route path="/login" element={<LoginPage />} />
        




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

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/jagat_med_web">
    <App />
  </BrowserRouter>
);

import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Outils from "./pages/Outils";
import Formation from "./pages/Formation";
import Module1 from "./pages/Module1";
import Module2 from "./pages/Module2";
import Module3 from "./pages/Module3";
import Module4 from "./pages/Module4";
import Module5 from "./pages/Module5";
import Module6 from "./pages/Module6";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/outils" element={<Outils />} />
      <Route path="/formation" element={<Formation />} />
      <Route path="/module1" element={<Module1 />} />
      <Route path="/module2" element={<Module2 />} />
      <Route path="/module3" element={<Module3 />} />
      <Route path="/module4" element={<Module4 />} />
      <Route path="/module5" element={<Module5 />} />
      <Route path="/module6" element={<Module6 />} />
    </Routes>
  );
}

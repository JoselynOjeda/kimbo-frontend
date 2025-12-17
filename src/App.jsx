import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Index from "./pages/Index";

function App() {
  return (
    <Routes>
      {/* 1. Ruta PÚBLICA (Cualquiera puede verla) */}
      <Route path="/" element={<Index />} />

      {/* 2. Ruta Login */}
      <Route path="/login" element={<AuthPage />} />
    </Routes>
  );
}

export default App;
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage"; 
import Index from "./pages/Index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/reset-password/:token" element={<AuthPage />} />
    </Routes>
  );
}

export default App;

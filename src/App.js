import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage/Index";
import ResumePage from "./pages/ResumePage/Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ProfilePage />} />
        <Route path="resume" element={<ResumePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

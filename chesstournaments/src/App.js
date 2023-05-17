import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './screens/LandingPage.js'
import LoginPage from './screens/LoginPage.js'
import RegisterPage from './screens/RegisterPage.js'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/CriarConta" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

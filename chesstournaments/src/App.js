import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './screens/LandingPage.js'
import LoginPage from './screens/LoginPage.js'
import RegisterPage from './screens/RegisterPage.js'
import AboutUs from './screens/AboutUs.js';
import ChessRankingPage from './screens/ChessRankingPage.js';
import TournamentPage from './screens/TournamentPage.js';
import TeamsPage from './screens/TeamsPage.js';
import MissingDataRegisterPage from './screens/MissingDataRegisterPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ChessRanking" element={<ChessRankingPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/CriarConta" element={<RegisterPage />} />
        <Route path="/CriarConta/DadosEmFalta" element={<MissingDataRegisterPage />} />
        <Route path="/Tournaments" element={<TournamentPage />} />
        <Route path="/Teams" element={<TeamsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

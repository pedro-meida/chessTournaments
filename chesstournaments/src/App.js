import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './utils/AuthContext';
import PrivateRoute from './utils/PrivateRoute';
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
      <AuthProvider>
        <Routes>

          {/* Rotas Públicas / Rotas que podem ser acedidos por todos os utilizadores, com login e sem login*/}
          <Route path="/" element={<LandingPage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ChessRanking" element={<ChessRankingPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/CriarConta" element={<RegisterPage />} />
          <Route path="/CriarConta/DadosEmFalta" element={<MissingDataRegisterPage />} />
          <Route path="/Tournaments" element={<TournamentPage />} />
          <Route path="/Teams" element={<TeamsPage />} />

          {/* Rotas Privadas / Rotas que só podem ser acedidas por utilizadores com login */}
          <Route element={<PrivateRoute />} >

          </Route>

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

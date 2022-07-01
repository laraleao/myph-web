import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import LoginPage from "./Routes/LoginPage/loginPage";
import CadastroPage from "./Routes/CadastroPage/cadastroPage";
import Remedio from "./Routes/RemedioPage/remedioPage";
import ListaRemedio from "./Routes/ListaRemedio/listaRemedio";
import AlterarDados from "./Routes/AlterarDadosPage/alterarDadosPage";
import { AuthProvider, AuthContext } from "./contexts/auth";

// Aqui que as minhas rotas secretas estão - onde serão renderizadas
const AppRoutes = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <div className="loading">Carregando...</div>;
    }

    if (!authenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/cadastroPage" element={<CadastroPage />} />
          {/* Rota Privada */}
          <Route
            path="/remedio"
            element={
              <Private>
                <Remedio />
              </Private>
            }
          />
          <Route
            path="/listaRemedio"
            element={
              <Private>
                <ListaRemedio />
              </Private>
            }
          />
          <Route
            path="/alteraDados"
            element={
              <Private>
                <AlterarDados />
              </Private>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;

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
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/cadastroPage" element={<CadastroPage />} />
          {/* Rota Privada */}
          {/* <Route
            exact
            path="/"
            element={
              <Private>
                <HomePage />
              </Private>
            }
          /> */}
          {/* <Route
            exact
            path="/"
            element={
              <Private>
                <HomePage />
              </Private>
            }
          /> */}
          {/* <Route
            exact
            path="/"
            element={
              <Private>
                <HomePage />
              </Private>
            }
          /> */}
          <Route path="/remedio" element={<Remedio />} />
          <Route path="/listaRemedio" element={<ListaRemedio />} />
          <Route path="/alteraDados" element={<AlterarDados />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;

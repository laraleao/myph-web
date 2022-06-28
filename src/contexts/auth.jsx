// FAZER CORS - para ligar com o back
// pegar o do prof e no filter fazer o request get method.equals
// quando chegar um metodo options ele tbm vai ignorar 

import React, { useState, useEffect, createContext } from "react";
import UsuarioService from "../services/usuario"

import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
// tudo aquilo que preciso deixar público

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }
    // ajuda a controlar e a exibir que a página ainda está carregando
    setLoading(false);
  }, []);

  //   navegação automática do login p/ home após autenticação
  //   dado fixo, sem servidor
  const login = async (email, senha) => {
    // api criar uma session

    const loggedUser = {
      email,
      senha,
    };

    const token = await UsuarioService.login(loggedUser);
    console.log("token: ", token);

    // GUARDAR TOKEN AQUI
    localStorage.setItem("token", token);

    if (senha === "secret") {
      setUser({ loggedUser });
      navigate("/");
    }
  };

  // user != null
  // authenticated = true

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

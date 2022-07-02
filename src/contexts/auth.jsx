import React, { useState, useEffect, createContext } from "react";
import { removeUserFromLocalStorageAndRedirect } from "../util/utils";

export const AuthContext = createContext();
// tudo aquilo que preciso deixar público

export const AuthProvider = ({ children }) => {
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
  const login = (email, senha) => {
    // api criar uma session

    const loggedUser = {
      email,
      senha,
    };

    // GUARDAR TOKEN AQUI
    localStorage.setItem("user", JSON.stringify(loggedUser));
  };

  const logout = () => {
    setUser(null);
    removeUserFromLocalStorageAndRedirect();
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

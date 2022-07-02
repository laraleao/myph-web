import React from "react";
import { Link } from "react-router-dom";

const navigation = () => {
  const nav = {
    display: "flex",
    justifyContent: "space-around",
    minHeight: "12vh",
    alignItems: "center",
    fontFamily: "sans-serif",
    background: "black",

    margin: "40px 80px",
  };

  const navLinks = {
    width: "90%",
    display: "flex",
    justifyContent: "space-around",
    listStyle: "none",
  };

  const link = {
    color: "white",
    textDecoration: "none",
    fontFamily: "Verdana",
  };
  return (
    <nav style={nav}>
      <ul style={navLinks}>
        <Link style={link} to="/remedio">
          <li> Cadastro de Remédio</li>
        </Link>

        <Link style={link} to="/listaRemedio">
          <li>Lista de Remédio</li>
        </Link>

        <Link style={link} to="/alteraDados">
          <li>Alterar Dados</li>
        </Link>
      </ul>
    </nav>
  );
};

export default navigation;

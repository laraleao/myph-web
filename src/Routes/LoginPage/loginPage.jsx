import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GiMedicinePills } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import UsuarioService from "../../services/usuario";

import { AuthContext } from "../../contexts/auth";

const container = {
  backgroundColor: "white",
  flex: 1,
  flexDirection: "row",
  justifyContent: "space-between",
  textAlign: "center",
  padding: 45,
};

const textLogo2 = {
  fontSize: 55,
  fontWeight: "bold",
  letterSpacing: 0.25,
  color: "#2E798A",
  textAlign: "center",
};

const textCasa = {
  color: "#2E798A",
  fontSize: 30,
  fontWeight: "bold",
  letterSpacing: 0.25,
  textAlign: "center",
  margin: 5,
};

const labelText = {
  fontWeight: "bold",
  marginTop: 8,
  height: 40,
  width: 230,
  margin: 18,
  borderWidth: 1,
  borderRadius: 2,
  padding: 10,
};

const input = {
  justifyContent: "center",
  alignItems: "center",
  borderWidth: 1,
  borderRadius: 2,
  height: 40,
  width: 230,
};

const textInput = {
  alignItems: "center",
  justifyContent: "center",
  color: "#091357",
  fontSize: 22,
  fontWeight: "bold",
  letterSpacing: 0.25,
  padding: 8,
};

const button = {
  textDecoration: "none",
  border: "none",
  backgroundColor: "#22577A",
  alignItems: "center",
  justifyContent: "center",
  height: 36,
  width: 100,
  color: "white",
  borderRadius: 3,
  cursor: "pointer",
  fontSize: 20,
};

const espaco = {
  padding: 35,
};

const espacoBotao = {
  padding: 5,
};

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    login(email, senha);

    // chamada de integração contexto e api
  };

  const navigate = useNavigate();

  // token em um lugar para ter chamada
  const handleSignInPress = async () => {
    console.log(email, senha);
    if (email.length === 0 || senha.length === 0) {
      return;
    } else {
      try {
        const response = await UsuarioService.login({
          email: email,
          senha: senha,
        });
        if (response) {
          // localStorage.setItem - para token passar nas outras chamadas
          localStorage.setItem("token", response);
          navigate("/listaRemedio");
        }
      } catch (e) {
        
      }
    }
  };

  return (
    <div style={container}>
      <h1 style={textLogo2}>
        MyPH <GiMedicinePills />
      </h1>
      <h3 style={textCasa}>My Pocket Home</h3>
      <p>{""}</p>
      <div>
        <label style={textInput} className="subtitle">
          Login
        </label>
      </div>

      <form action="" className="form" onSubmit={handleSubmit}>
        <div style={espaco}>
          <div className="field">
            <label style={labelText} htmlFor="email" className="email">
              E-mail
            </label>
            <input
              style={input}
              type="text"
              className="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div style={espaco}>
            <label style={labelText} htmlFor="password" className="password">
              Senha
            </label>
            <input
              style={input}
              type="password"
              className="password"
              id="password"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
            />
          </div>
        </div>

        <div style={espacoBotao}>
          <button
            style={button}
            type="submit"
            onClick={() => handleSignInPress()}
          >
            Entrar
          </button>
        </div>
        <p>
          {
            <Link
              to="/CadastroPage"
              style={{
                justifyContent: "center",
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Cadastre-se na MyPH
            </Link>
          }
        </p>
      </form>
    </div>
  );
};

export default LoginPage;

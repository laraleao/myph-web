import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

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
  const { authenticated, login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (event) => {
    event.preventDefaul();
    console.log("submit", { email, senha });
    login(email, senha);
    // chamada de integração contexto e api
  };

  // handleSignInPress = async () => {
  //   console.log(email, password);
  //   if (email.length === 0 || password.length === 0) {
  //     return;
  //   } else {
  //     try {
  //       const response = await api.post('/usuario/login', {
  //         email: email,
  //         senha: password,
  //       });
  //       if (response.status == 200) {
  //         navigation.navigate('Inicio');
  //       }
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  // };

  return (
    <div style={container}>
      <h1 style={textLogo2}>My Pocket Home</h1>
      <p>{String(authenticated)}</p>
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
          <button style={button} type="submit">
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

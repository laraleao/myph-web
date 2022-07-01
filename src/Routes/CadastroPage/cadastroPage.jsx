import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { GiMedicinePills } from "react-icons/gi";
import LoginPage from "../LoginPage/loginPage";
import UsuarioService from "../../services/usuario";

const container = {
  backgroundColor: "white",
  flex: 1,
  flexDirection: "row",
  justifyContent: "space-between",
  textAlign: "center",
  padding: 20,
};

const textCadastro = {
  fontSize: 40,
  fontWeight: "bold",
  letterSpacing: 0.25,
  color: "#2E798A",
  textAlign: "center",
  margin: 25,
};

const text = {
  alignItems: "center",
  color: "#091357",
  fontSize: 18,
  fontWeight: "bold",
  justifyContent: "center",
  letterSpacing: 0.25,
  padding: 8,
};

const input = {
  justifyContent: "center",
  alignItems: "center",
  marginTop: 8,
  height: 40,
  width: 230,
  margin: 18,
  borderWidth: 1,
  borderRadius: 2,
  padding: 10,
};

const button = {
  textDecoration: "none",
  border: "none",
  backgroundColor: "#22577A",
  alignItems: "center",
  justifyContent: "center",
  height: 46,
  width: 120,
  color: "white",
  borderRadius: 3,
  cursor: "pointer",
  fontSize: 20,
  margin: 10,
};

const CadastroPage = () => {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConfirmar, setSenhaConfirmar] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [cep, setCep] = useState("");

  const cadastro = [
    email,
    nome,
    senha,
    senhaConfirmar,
    rua,
    bairro,
    cidade,
    estado,
    cep,
  ];

  const { register, setValue } = useForm("");

  // só fazer a requisição ao servidor para salvar o formulário
  const cadastrarUsuario = async (e) => {
    e.preventDefault();

    if (
      !email ||
      !nome ||
      !senha ||
      !senhaConfirmar ||
      !rua ||
      !bairro ||
      !cidade ||
      !estado ||
      !cep
    ) {
      console.log(cadastro);
      alert("É necessário preencher todos os campos!");
      return;
    }

    try {
      // usuario inserir
      console.log("TRY");
      const response = await UsuarioService.inserirUsuario({
        nome,
        email,
        senha,
        senhaConfirmar,
        rua,
        bairro,
        cidade,
        estado,
        cep,
      });

      console.log(response);
      //console.log(res);
      if (response.status === 201) {
        console.log("201");
        alert("Usuário cadastrado com sucesso!");
        window.location.href = "/";
      } else {
        console.log(response);
        console.log("else: nao é 201");
        alert("Cadastro com erro!\n\nTente novamente.");
      }
    } catch (e) {
      console.log("CAIU NO CATCH");
    }
  };

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setValue("endereco", data.logradouro);
        setRua(data.logradouro);
        setValue("cidade", data.localidade);
        setCidade(data.localidade);
        setValue("bairro", data.bairro);
        setBairro(data.bairro);
        setValue("estado", data.uf);
        setEstado(data.uf);
      });
  };

  return (
    <div style={container}>
      <form className="needs-validation">
        <div className="form-row">
          <div className="form-group col-md-6">
            <h1 style={textCadastro}>
              Faça seu cadastro na MyPH <GiMedicinePills />
            </h1>
            <label style={text} htmlFor="inputNome">
              Nome
            </label>
            <input
              required
              style={input}
              type="text"
              {...register("nome")}
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="form-group col-md-6">
            <label style={text} htmlFor="inputEmail">
              Email
            </label>
            <input
              required
              style={input}
              type="email"
              {...register("email")}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <label style={text} htmlFor="inputSenha">
              Senha
            </label>
            <input
              required
              style={input}
              type="password"
              {...register("senha")}
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <input
              required
              style={input}
              type="password"
              {...register("confirmarSenha")}
              placeholder="Confirmar Senha"
              value={senhaConfirmar}
              onChange={(e) => setSenhaConfirmar(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <h3 style={textCadastro}>Preencha o seu endereço</h3>
          <label style={text} htmlFor="inputCEP">
            CEP
          </label>
          <input
            required
            style={input}
            type="text"
            placeholder="Digite seu CEP"
            {...register("cep")}
            onBlur={checkCEP}
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          ></input>

          <label style={text} htmlFor="inputEndereco">
            Logradouro
          </label>
          <input
            required
            style={input}
            type="text"
            {...register("endereco")}
            id="inputEndereco"
            placeholder="Rua X, nº 0"
            value={rua}
            onChange={(e) => setRua(e.target.value)}
          />
          <label style={text} htmlFor="inputComplemento">
            N°/Complemento
          </label>
          <input
            required
            style={input}
            type="text"
            placeholder="Apartamento, hotel, casa, etc."
          />
        </div>
        <div className="form-row">
          <div className="form-group col-6 col-md-4">
            <label style={text} htmlFor="inputCity">
              Cidade
            </label>
            <input
              required
              style={input}
              type="text"
              {...register("cidade")}
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />

            <label style={text} htmlFor="inputBairro">
              Bairro
            </label>
            <input
              required
              style={input}
              type="text"
              {...register("bairro")}
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
            ></input>
            <label style={text} htmlFor="inputEstado">
              Estado
            </label>
            <input
              required
              style={input}
              type="text"
              {...register("estado")}
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            ></input>
          </div>
        </div>

        <button
          style={button}
          type="submit"
          onClick={(e) => cadastrarUsuario(e)}
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default CadastroPage;

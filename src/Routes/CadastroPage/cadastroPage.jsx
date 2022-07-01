import React, { useState } from "react";
import { useForm } from "react-hook-form";
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
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConfirmar, setSenhaConfirmar] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [cep, setCep] = useState("");

  const { register, setValue } = useForm("");

  const cadastrarUsuario = async (e) => {
    console.log("ON SUBMIT OIIIIIIIII");
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

      console.log("passou aqui");
      alert("alert alert");
      //console.log(res);
      if (response.status === 201) {
        console.log("201");
        alert("Usuário cadastrado com sucesso!");
        window.location.href = "/loginPage";
      } else {
        console.log(response);
        console.log("else: nao é 201");
        alert("Cadastro com erro!\n\nTente novamente.");
      }
    } catch (e) {
      console.log("CAIU NO CATCH");
    }
  };

  // só fazer a requisição ao servidor para salvar o formulário
  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   const {
  //     nome,
  //     email,
  //     senha,
  //     senhaConfirmar,
  //     rua,
  //     bairro,
  //     cidade,
  //     estado,
  //     cep,
  //   } = this.state;
  //   if (
  //     !nome ||
  //     !email ||
  //     !senha ||
  //     !senhaConfirmar ||
  //     !rua ||
  //     !bairro ||
  //     !cidade ||
  //     !estado ||
  //     !cep
  //   ) {
  //     this.setState({ error: "Preencha todos os dados para se cadastrar" });
  //   } else {
  //     console.log(this.state);
  //     try {
  //       await UsuarioService.inserirUsuario(
  //         `http://localhost:9090/myph/usuario`,
  //         {
  //           nome,
  //           email,
  //           senha,
  //           senhaConfirmar,
  //           rua,
  //           bairro,
  //           cidade,
  //           estado,
  //           cep,
  //         }
  //       );
  //       // if (response.status === 201) {
  //       //   navigate("/loginPage");
  //       // }
  //     } catch (err) {
  //       console.log(err);
  //       this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
  //     }

  //     // if  {
  //     //   alert("Usuário cadastrado com sucesso!");
  //     //   ;
  //     // } else {
  //     //   console.log(response);
  //     //   alert("Formulário com erro!\n\nTente novamente.");
  //     // }
  //   }

  // const handleSignIn = async () => {
  //   console.log(email, senha);
  //   if (
  //     email.length === 0 ||
  //     senha.length === 0 ||
  //     senhaConfirmar.length === 0 ||
  //     rua.length === 0 ||
  //     numero.length === 0 ||
  //     bairro.length === 0 ||
  //     cidade.length === 0 ||
  //     estado.length === 0 ||
  //     cep.length === 0
  //   );

  // const handleSignInPress = async () => {
  //   console.log(email, senha);
  //   if (email.length === 0 || senha.length === 0) {
  //     return;
  //   } else {
  //     try {
  //       const response = await UsuarioService.salvarUsuario({
  //         nome: nome,
  //         email: email,
  //         senha: senha,
  //         senhaConfirmar: senhaConfirmar,
  //         rua: rua,
  //         numero: numero,
  //         bairro: bairro,
  //         cidade: cidade,
  //         estado: estado,
  //         pais: pais,
  //         cep: cep,
  //         telefone: telefone,
  //         ativo: ativo,
  //       });
  //       if (response) {
  //         // localStorage.setItem - para token passar nas outras chamadas
  //         localStorage.setItem("token", response);
  //         navigate("/login");
  //       }
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  // };

  // FAZER VALIDAÇÃO DE SENHA - com o confirmar senha

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setValue("endereco", data.logradouro);
        setValue("cidade", data.localidade);
        setValue("bairro", data.bairro);
        setValue("estado", data.uf);
        console.log(data);
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
              placeholder="senha"
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
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            onBlur={checkCEP}
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
            onBlur={checkCEP.logradouro}
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
              placeholder="cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              onBlur={checkCEP.localidade}
            />

            <label style={text} htmlFor="inputBairro">
              Bairro
            </label>
            <input
              required
              style={input}
              type="text"
              {...register("bairro")}
              placeholder="bairro"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
              onBlur={checkCEP.bairro}
            ></input>
            <label style={text} htmlFor="inputEstado">
              Estado
            </label>
            <input
              required
              style={input}
              type="text"
              {...register("estado")}
              placeholder="estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              onBlur={checkCEP.uf}
            ></input>
          </div>
        </div>

        <button style={button} onClick={() => cadastrarUsuario()}>
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default CadastroPage;

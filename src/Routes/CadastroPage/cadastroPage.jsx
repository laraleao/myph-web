import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { GiMedicinePills } from "react-icons/gi";

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

  const { register, handleSubmit, setValue } = useForm("");

  // só fazer a requisição ao servidor para salvar o formulário
  const onSubmit = (e) => {
    console.log(e);
  };

  const handleSignIn = async () => {
    console.log(email, senha);
    if (email.length === 0 || senha.length === 0) {
      return;
    } else {
      try {
        // await api.post...
        const response = await ("/usuario",
        {
          email: email,
          senha: senha,
        });
        if (response.status === 201) {
        }
      } catch (e) {
        console.log(e);
      }
    }
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

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setValue("endereco", data.logradouro);
        setValue("cidade", data.localidade);
        setValue("bairro", data.bairro);
        setValue("estado", data.uf);
      });
  };

  return (
    <div style={container}>
      <form className="needs-validation" onSubmit={handleSubmit(onSubmit)}>
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
            <input required style={input} type="text" {...register("cidade")} />

            <label style={text} htmlFor="inputBairro">
              Bairro
            </label>
            <input
              required
              style={input}
              type="text"
              {...register("bairro")}
            ></input>
            <label style={text} htmlFor="inputEstado">
              Estado
            </label>
            <input
              required
              style={input}
              type="text"
              {...register("estado")}
            ></input>
          </div>
        </div>

        <button style={button} type="submit" onClick={() => handleSignIn()}>
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default CadastroPage;

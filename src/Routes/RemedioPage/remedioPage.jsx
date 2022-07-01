import React, { useState } from "react";
import Navigation from "../../Navigation/navigation";
import { useForm } from "react-hook-form";
import RemedioService from "../../services/remedio";

const container = {
  backgroundColor: "white",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: 5,
};

const textRemedio = {
  fontSize: 40,
  fontWeight: "bold",
  letterSpacing: 0.25,
  color: "#2E798A",
  textAlign: "center",
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
  height: 35,
  width: 200,
  margin: 8,
  borderWidth: 1,
  borderRadius: 2,
  padding: 8,
};

const espaco = {
  padding: 15,
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
  margin: 15,
};

const Remedio = () => {
  const [nomeRemedio, setNomeRemedio] = useState("");
  const [vencimento, setVencimento] = useState("");
  const [quantidade, setQuantidade] = useState(0);
  const { register } = useForm("");

  // só fazer a requisição ao servidor para salvar o formulário
  const cadastrarRemedio = async (e) => {
    try {
      // remedio inserir
      console.log("TRY");
      const res = await RemedioService.inserirRemedio({
        nomeRemedio,
        vencimento,
        quantidade,
      });

      console.log(res);
      //console.log(res);
      if (res.status === 201) {
        console.log("201");
        alert("Remédio cadastrado com sucesso!");
        window.location.href = "/listaRemedio";
      } else {
        console.log(res);
        console.log("else: nao é 201");
        alert("Cadastro com erro!\n\nTente novamente.");
      }
    } catch (e) {
      console.log("CAIU NO CATCH");
    }
  };

  return (
    <div>
      <Navigation />

      <div style={container}>
        <h1 style={textRemedio}>Cadastro de Remédio</h1>

        <div style={espaco}>
          <label style={text}>Nome do Remédio:</label>
          <input
            required
            style={input}
            type="text"
            {...register("nome")}
            value={nomeRemedio}
            onChange={(e) => setNomeRemedio(e.target.value)}
          ></input>
        </div>
        <div style={espaco}>
          <label style={text}>Validade:</label>
          <input
            required
            style={input}
            {...register("text/number")}
            type="text/number"
            value={vencimento}
            onChange={(e) => setVencimento(e.target.value)}
          ></input>
        </div>

        <div style={espaco}>
          <label style={text}>Quantidade:</label>
          <input
            required
            min={0}
            style={input}
            {...register("number")}
            type="number"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
          ></input>
        </div>

        <button
          style={button}
          onClick={() => {
            cadastrarRemedio();
          }}
        >
          Cadastrar
        </button>
      </div>
    </div>
  );
};
export default Remedio;

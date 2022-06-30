import React from "react";
import Navigation from "../../Navigation/navigation";
import RemedioService from "../../services/remedio";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const container = {
  backgroundColor: "white",
  justifyContent: "center",
  flex: 1,
  flexDirection: "row",
  textAlign: "center",
  padding: 38,
  fontSize: 40,
  fontWeight: "bold",
  letterSpacing: 0.25,
  color: "#2E798A",
  alignItens: "center",
};

// const textRemedio = {
//   fontSize: 40,
//   fontWeight: "bold",
//   letterSpacing: 0.25,
//   color: "#2E798A",
//   textAlign: "center",
// };

const listagem = {
  paddingBottom: "20px",
  color: "black",
  textAlign: "center",
  alignItens: "center",
};

const th = {
  border: "1px solid",
  textAlign: "left",
};

const td = {
  border: "1px solid",
  textAlign: "left",
};

const tabela = {
  color: "black",
  width: "90%",
};

const acoes = {
  textAlign: "center",
  border: "1px solid",
};

// UseEffect para busca - como filmes


const ListaRemedio = () => {
  const [remedios,setRemedios]= useState(() => {});
  const [editar,setEditar]= useState(() => {});
  const [excluir,setExcluir]= useState(() => {})
  console.log("Remedios na Listagem", remedios);

  // dados.push({ titulo: "teste" });
  // console.log("remedios da lista", dados);
  useEffect(()=>{
    async function carregarRemedios() {
      const remedios = await RemedioService.buscarRemedios()
      setRemedios(remedios)
      console.log(remedios)
    }
    carregarRemedios() 
  },[])

  if (!remedios || remedios.length === 0) {
    return (
      <>
        {" "}
        <Navigation />
        <div>
          <span style={container}>Não existem remédios a serem listados.</span>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Navigation />

        <div style={listagem}>
          {remedios && remedios.length > 0 && (
            <table style={tabela}>
              <thead>
                <tr>
                  {/* cabeçalho */}
                  <th style={th}>Nome Rémedio</th>
                  <th style={th}>Validade</th>
                  <th style={th}>Quantidade</th>
                  <th style={acoes} colSpan="2">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* interando a lista */}
                {remedios.map((remedios) => (
                  <tr key={remedios.id}>
                    {/* textos */}
                    <td style={td}>{remedios.nomeRemedio}</td>
                    <td style={td}>{remedios.vencimento}</td>
                    <td style={td}>{remedios.quantidade}</td>
                    {/* Fazer evento */}
                    <td style={td}>
                      <button style={acoes} onClick={() => editar(remedios)}>
                        Editar
                      </button>
                    </td>
                    <td style={td}>
                      <button
                        style={acoes}
                        onClick={async () => {
                          console.log("excluir:");
                          console.table(remedios);
                          await RemedioService.excluirRemedio(remedios.remedioId);
                          window.location.reload();
                        }}
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </>
    );
  }
};

export default ListaRemedio;

import React from "react";
import Navigation from "../../Navigation/navigation";

// const container = {
//   backgroundColor: "white",
//   justifyContent: "center",
//   alignItems: "center",
//   textAlign: "center",
//   padding: 5,
// };

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

const ListaRemedio = (props) => {
  const { remedios, editar, excluir } = props;
  console.log("Remedios na Listagem", remedios);

  // dados.push({ titulo: "teste" });
  // console.log("remedios da lista", dados);

  // if (!dados || dados.length === 0) {
  //   return <span>Não existem remedios a serem listados</span>;
  // }

  return (
    <>
      <Navigation />

      <div style={listagem}>
        {remedios && remedios.length > 0 && (
          <table style={tabela}>
            <thead>
              <tr>
                {/* cabeçalho */}
                <th style={th}>Nome Remedio</th>
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
                    <button style={acoes} onClick={() => excluir(remedios.id)}>
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
};

export default ListaRemedio;

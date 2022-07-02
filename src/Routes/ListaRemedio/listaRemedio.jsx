import React, { useState } from "react";
import Navigation from "../../Navigation/navigation";
import RemedioService from "../../services/remedio";
import { useEffect } from "react";
import { HiOutlineCursorClick } from "react-icons/hi";
import Modal from "react-modal";

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

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const listagem = {
  height: "auto",
  width: "95%",
  textAlign: "center",
  paddingBottom: "20px",
  color: "black",
  margin: 80,
};

const espaco = {
  margin: 80,
  padding: 15,
};

const th = {
  border: "1px solid",
  textAlign: "center",
  justifyContent: "center",
  textDecoration: "none",
  backgroundColor: "#22577A",
  alignItems: "center",
  color: "white",
  borderRadius: 3,
};

const td = {
  border: "1px solid",
  textAlign: "center",
  fontWeight: "bold",
};

const tabela = {
  color: "black",
  width: "80%",
};

const acoes = {
  textAlign: "center",
  justifyContent: "center",
  border: "1px solid",
  textDecoration: "none",
  backgroundColor: "#22577A",
  alignItems: "center",
  color: "white",
  borderRadius: 3,
  cursor: "pointer",
  height: 36,
  width: 50,
};

const acoesExcluir = {
  textAlign: "center",
  justifyContent: "center",
  border: "1px solid",
  textDecoration: "none",
  backgroundColor: "red",
  alignItems: "center",
  color: "white",
  borderRadius: 3,
  cursor: "pointer",
  height: 36,
  width: 50,
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
  margin: 55,
};

const buttonFechar = {
  textDecoration: "none",
  border: "none",
  backgroundColor: "red",
  alignItems: "center",
  justifyContent: "center",
  height: 36,
  width: 100,
  color: "white",
  borderRadius: 3,
  cursor: "pointer",
  fontSize: 20,
  margin: 55,
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

const text = {
  alignItems: "center",
  color: "#091357",
  fontSize: 18,
  fontWeight: "bold",
  justifyContent: "center",
  letterSpacing: 0.25,
  padding: 8,
};

const textCadastro = {
  fontSize: 35,
  fontWeight: "bold",
  letterSpacing: 0.25,
  color: "#2E798A",
  textAlign: "center",
  margin: 25,
};

const ListaRemedio = () => {
  const [editModal, setEditModal] = useState(false);
  const [remedios, setRemedios] = useState(() => {});
  const [remedioEditId, setRemedioEditId] = useState(0);
  const [remedioEditNome, setRemedioEditNome] = useState("");
  const [remedioEditVencimento, setRemedioEditVencimento] = useState("");
  const [remedioEditQtde, setRemedioEditQtde] = useState(0);

  console.log("Remedios na Listagem", remedios);

  // dados.push({ titulo: "teste" });
  // console.log("remedios da lista", dados);
  const edit = (remedio) => {
    console.log(remedio);
    setRemedioEditId(remedio.remedioId);
    setRemedioEditNome(remedio.nomeRemedio);
    setRemedioEditVencimento(remedio.vencimento);
    setRemedioEditQtde(remedio.quantidade);
    setEditModal(true);
  };

  useEffect(() => {
    async function carregarRemedios() {
      const remedios = await RemedioService.buscarRemedios();
      setRemedios(remedios);
      console.log(remedios);
    }
    carregarRemedios();
  }, []);

  const atualizaRemedio = async (e) => {
    e.preventDefault();
    console.log(
      "REMEDIO => " +
        [remedioEditNome, remedioEditQtde, remedioEditId, remedioEditVencimento]
    );
    try {
      // remedio atualizar
      console.log("TRY");
      const res = await RemedioService.atualizaRemedio({
        nomeRemedio: remedioEditNome,
        quantidade: remedioEditQtde,
        remedioId: remedioEditId,
        vencimento: remedioEditVencimento,
      });

      console.log(res);

      if (res.status === 201) {
        console.log("201");
        alert("Remédio alterado com sucesso!");
        window.location.href = "/listaRemedio";
        window.location.reload();
      } else {
        console.log("else: nao é 200");
        alert("Cadastro com erro!\n\nTente novamente.");
      }
    } catch (e) {
      console.log("CAIU NO CATCH");
    }
  };

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
        <div style={espaco}>
          <a
            className="bula"
            href="https://www.bulario.com/"
            style={{
              justifyContent: "center",
              alignItems: "center",
              textDecoration: "none",
              fontSize: 22,
              color: "red",
              fontWeight: "bold",
            }}
          >
            <span style={{ color: "black" }}>Caso precise:</span> Consulte a
            BULA aqui{" "}
            <span style={{ color: "black" }}>
              <HiOutlineCursorClick />
            </span>
          </a>
        </div>
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
                {remedios.map((remedio) => (
                  <tr key={remedio.remedioId}>
                    {/* textos */}
                    <td style={td}>{remedio.nomeRemedio}</td>
                    <td style={td}>{remedio.vencimento}</td>
                    <td style={td}>{remedio.quantidade}</td>
                    {/* Fazer evento */}
                    <td style={td}>
                      <button style={acoes} onClick={() => edit(remedio)}>
                        Editar
                      </button>
                    </td>
                    <td style={td}>
                      <button
                        style={acoesExcluir}
                        onClick={async () => {
                          console.log("excluir:");
                          console.table(remedio);
                          await RemedioService.excluirRemedio(
                            remedio.remedioId
                          );
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
        <Modal
          isOpen={editModal}
          onRequestClose={() => setEditModal(false)}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 style={textCadastro}>Editar Rémedio</h2>

          <form>
            <div>
              <label style={text}>Nome do Remédio:</label>
              <input
                style={input}
                type="text"
                value={remedioEditNome}
                onChange={(e) => setRemedioEditNome(e.target.value)}
              ></input>
            </div>
            <div>
              <label style={text}>Validade:</label>
              <input
                style={input}
                type="text"
                value={remedioEditVencimento}
                onChange={(e) => setRemedioEditVencimento(e.target.value)}
              ></input>
            </div>
            <div>
              <label style={text}>Quantidade:</label>
              <input
                style={input}
                type="number"
                value={remedioEditQtde}
                onChange={(e) => setRemedioEditQtde(e.target.value)}
              ></input>
            </div>
          </form>
          <button
            style={button}
            onClick={async (e) => {
              console.log("atualizar:");
              await atualizaRemedio(e);
            }}
          >
            Atualizar
          </button>
          <button style={buttonFechar} onClick={() => setEditModal(false)}>
            Fechar
          </button>
        </Modal>
      </>
    );
  }
};

export default ListaRemedio;

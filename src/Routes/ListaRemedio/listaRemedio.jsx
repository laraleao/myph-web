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
  alignItens: "center",
};

const espaco = {
  padding: 15,
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

const ListaRemedio = () => {
  const [editModal, setEditModal] = useState(false);
  const [remedios, setRemedios] = useState(() => {});
  const [remedioEdit, setRemedioEdit] = useState("");
  console.log("Remedios na Listagem", remedios);

  // dados.push({ titulo: "teste" });
  // console.log("remedios da lista", dados);
  const edit = async (remedio) => {
    console.log(remedio);
    setRemedioEdit(remedio);
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
                {remedios.map((remedios) => (
                  <tr key={remedios.remedioId}>
                    {/* textos */}
                    <td style={td}>{remedios.nomeRemedio}</td>
                    <td style={td}>{remedios.vencimento}</td>
                    <td style={td}>{remedios.quantidade}</td>
                    {/* Fazer evento */}
                    <td style={td}>
                      <button style={acoes} onClick={() => edit(remedios)}>
                        Editar
                      </button>
                    </td>
                    <td style={td}>
                      <button
                        style={acoes}
                        onClick={async () => {
                          console.log("excluir:");
                          console.table(remedios);
                          await RemedioService.excluirRemedio(
                            remedios.remedioId
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
          isOpen={editModal && remedioEdit != null}
          onRequestClose={() => setEditModal(false)}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2>Editar Remedio</h2>

          <form>
            <div>
              <label>Nome do Remédio:</label>
              <input type="text" value={remedioEdit.nomeRemedio}></input>
            </div>
            <div>
              <label>Validade:</label>
              <input type="text" value={remedioEdit.vencimento}></input>
            </div>
            <div>
              <label>Quantidade:</label>
              <input type="number" value={remedioEdit.quantidade}></input>
            </div>
          </form>
          <button onClick={() => setEditModal(false)}>fechar</button>
        </Modal>
      </>
    );
  }
};

export default ListaRemedio;

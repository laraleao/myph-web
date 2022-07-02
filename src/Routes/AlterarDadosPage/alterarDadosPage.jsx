import React, { useState } from "react";
import { useEffect } from "react";
import Navigation from "../../Navigation/navigation";
import { removeUserFromLocalStorageAndRedirect } from "../../util/utils";
import UsuarioService from "../../services/usuario";
import Modal from "react-modal";

const mainPage = {
  height: "auto",
  width: "95%",
  textAlign: "center",
};

const textCadastro = {
  fontSize: 38,
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

const button = {
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
};

const buttonAtualiza = {
  textDecoration: "none",
  border: "none",
  backgroundColor: "#22577A",
  alignItems: "center",
  justifyContent: "center",
  height: 50,
  width: 150,
  color: "white",
  borderRadius: 3,
  cursor: "pointer",
  fontSize: 20,
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

const AlterarDadosPage = () => {
  const [editModal, setEditModal] = useState(false);
  const [usuario, setUsuario] = useState(() => {});
  const [usuarioEditNome, setEditNome] = useState("");
  const [usuarioEditEmail, setEditEmail] = useState("");

  console.log("Usuário na Lista", usuario);

  const edit = (usuario) => {
    console.log(usuario);

    setEditNome(usuario.nome);
    setEditEmail(usuario.email);
    setEditModal(true);
  };

  useEffect(() => {
    async function buscarUsuario() {
      const usuario = await UsuarioService.buscarUsuario();
      setUsuario(usuario);
      console.log(usuario);
    }
    buscarUsuario();
  }, []);

  const atualizaUsuario = async (e) => {
    e.preventDefault();
    console.log("Usuario => " + [usuarioEditNome, usuarioEditEmail]);
    try {
      // usuario atualizar
      const res = await UsuarioService.atualizaUsuario({
        nome: usuarioEditNome,
        email: usuarioEditEmail,
      });

      console.log(res);

      if (res.status === 201) {
        console.log("201");
        alert("Remédio alterado com sucesso!");
        window.location.href = "/listaRemedio";
        window.location.reload();
      } else {
        console.log("else: nao é 201");
        alert("Cadastro com erro!\n\nTente novamente.");
      }
    } catch (e) {
      console.log("CAIU NO CATCH");
    }
  };

  return (
    <>
      <Navigation />
      <div style={mainPage}>
        <button
          style={button}
          type="submit"
          onClick={() => removeUserFromLocalStorageAndRedirect()}
        >
          Sair
        </button>
      </div>
      <div style={listagem}>
        {usuario && usuario.length > 0 && (
          <table style={tabela}>
            <thead>
              <tr>
                {/* cabeçalho */}
                <th style={th}>Nome Usuário</th>
                <th style={th}>Email</th>
                <th style={acoes} colSpan="1">
                  Ação
                </th>
              </tr>
            </thead>
            <tbody>
              {/* interando a lista */}
              {usuario.map((usuario) => (
                <tr key={usuario.usuarioId}>
                  <td style={td}>{usuario.nome}</td>
                  <td style={td}>{usuario.email}</td>
                  {/* Fazer evento */}
                  <td style={td}>
                    <button style={acoes} onClick={() => edit(usuario)}>
                      Editar
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
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        <h2 style={textCadastro}>Editar Usuário</h2>
        <form>
          <div>
            <label style={text}>Nome do Usuário:</label>
            <input
              style={input}
              type="text"
              value={usuarioEditNome}
              onChange={(e) => setEditNome(e.target.value)}
            ></input>
          </div>
          <div>
            <label style={text}>Email:</label>
            <input
              style={input}
              type="text"
              value={usuarioEditEmail}
              onChange={(e) => setEditEmail(e.target.value)}
            ></input>
          </div>
        </form>
        <button
          style={buttonAtualiza}
          onClick={async (e) => {
            console.log("atualizar:");
            await atualizaUsuario(e);
          }}
        >
          Atualizar Usuário
        </button>{" "}
        <button style={buttonFechar} onClick={() => setEditModal(false)}>
          Fechar
        </button>
      </Modal>
    </>
  );
};

export default AlterarDadosPage;

import axios from "axios";

// colocar login em algum lugar paara recuperar
class UsuarioService {
  async inserirUsuario(usuario) {
    const response = await axios
      .post(`http://localhost:9090/myph/remedios`, usuario)
      .then((response) => {
        console.log("data");
        console.log(response.data);
        return response;
      })
      .catch((error) => {
        console.log("erro request");
        return error;
      });

    return response;
  }

  login(usuario) {
    return axios
      .post(`http://localhost:9090/myph/usuario/login`, usuario, {
        transformResponse: (response) => response,
      })
      .then((response) => response.data);
  }
  buscarUsuario() {
    return axios
      .get(`http://localhost:9090/myph/usuario`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => response.data)
      .catch((erro) => {
        throw erro;
      });
  }

  salvarUsuario(usuario) {
    return axios.post(`http://localhost:9090/usuario`, usuario, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  }

  atualizaUsuario(usuario) {
    return axios.put(
      `http://localhost:9090/myph/usuario/${usuario.id}`,
      usuario,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  }

  excluirUsuario(usuario) {
    return axios
      .delete(`http://localhost:9090/myph/usuario/${usuario.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .catch((erro) => {
        throw erro;
      });
  }
}

export default new UsuarioService();

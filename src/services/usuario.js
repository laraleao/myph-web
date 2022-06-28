import axios from "axios";

class UsuarioService {
  login(usuario) {
    console.log("usuario: ", usuario)
    return axios.post(`http://localhost:9090/myph/usuario/login`, usuario, {
        transformResponse: response => response
    }).then(response => response.data);
  }
  buscarUsuario() {
    // posso colocar o token aqui
    return axios
      .get(
        // CONFERIR ROTA
        `http://localhost:9090/myph/usuario`
        //, {headers: {
        //   Authorization: "Bearer hausidshd";
        // }} )
      )
      .then((response) => response.data)
      .catch((erro) => {
        throw erro;
      });
  }
  salvarUsuario(usuario) {
    return axios.post(`http://localhost:9090/usuario`, usuario);
  }

  atualizaUsuario(usuario) {
    return axios.put(
      `http://localhost:9090/myph/usuario/${usuario.id}`,
      usuario
    );
  }

  excluirUsuario(usuario) {
    return axios
      .delete(`http://localhost:9090/myph/usuario/${usuario.id}`)
      .catch((erro) => {
        throw erro;
      });
  }
}
export default new UsuarioService();
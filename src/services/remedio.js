import axios from "axios";

class RemedioService {
  buscarRemedios() {
    // posso colocar o token aqui
    return axios
      .get(
        // CONFERIR ROTA
        "http://localhost:8080/remedio"
        //, {headers: {
        //   Authorization: "Bearer hausidshd";
        // }} )
      )
      .then((response) => response.data)
      .catch((erro) => {
        throw erro;
      });
  }
  inserirRemedio(remedio) {
    return axios.post("http://localhost:8080/remedio", remedio);
  }

  atualizaRemedio(remedio) {
    return axios.put(`http://localhost:8080/remedio/${remedio.id}`, remedio);
  }
  excluirRemedio(idRemedio) {
    return axios
      .delete(`http://localhost:8080/remedio/${idRemedio}`)
      .catch((erro) => {
        throw erro;
      });
  }
}

export default new RemedioService();

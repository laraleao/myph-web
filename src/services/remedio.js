import axios from "axios";

class RemedioService {
  buscarRemedios() {
    // posso colocar o token aqui
    return axios
      .get(
        // CONFERIR ROTA
        `http://localhost:9090/myph/remedios`
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
    return axios.post(`http://localhost:9090/myph/remedios`, remedio);
  }

  atualizaRemedio(remedio) {
    return axios.put(
      `http://localhost:9090/myph/remedios/${remedio.id}`,
      remedio
    );
  }
  
  excluirRemedio(id) {
    return axios
      .delete(`http://localhost:9090/myph/remedios/${id}`)
      .catch((erro) => {
        throw erro;
      });
  }
}

export default new RemedioService();

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
  //   caso seja remedio?nome
  // , params: {nome: 'Dipirona'}
}

export default new AlunoRemedios();

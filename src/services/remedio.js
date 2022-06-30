import axios from "axios";

class RemedioService {
  buscarRemedios() {
    return axios
      .get(`http://localhost:9090/myph/remedios`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => response.data)
      .catch((erro) => {
        throw erro;
      });
  }
  inserirRemedio(remedio) {
    return axios.post(`http://localhost:9090/myph/remedios`, remedio, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  }

  atualizaRemedio(remedio) {
    return axios.put(
      `http://localhost:9090/myph/remedios/${remedio.id}`,
      remedio,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  }

  excluirRemedio(idRemedio) {
    return axios
      .delete(`http://localhost:9090/myph/remedios/${idRemedio}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .catch((erro) => {
        throw erro;
      });
  }
}

export default new RemedioService();

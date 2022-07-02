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
  async inserirRemedio(remedio) {
    const response = await axios
      .post(`http://localhost:9090/myph/remedios`, remedio, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
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

  atualizaRemedio(remedio) {
    return axios
      .put(
        `http://localhost:9090/myph/remedios/${remedio.remedioId}`,
        remedio,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        console.log("data");
        console.log(response.data);
        return response;
      })
      .catch((error) => {
        console.log("erro request");
        return error;
      });
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

import React from "react";
import ListaRemedio from "../Routes/ListaRemedio/listaRemedio";
import AlterarDados from "../Routes/AlterarDadosPage/alterarDadosPage";
import Section from "../Routes/AlterarDadosPage/Section";
import RemedioService from "../services/remedio";

class Remedio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { remedios: [] };

    // vinculada dentro dela mesma
    this.excluirRemedio = this.excluirRemedio.bind(this);
  }

  // chama aqui o setState - depois do render (montagem 1)
  componentDidMount() {
    this.carregarRemedios();
    this.setState({ remedios: remedios });
    console.log("Estado no did:", this.state.remedios);
  }

  carregarRemedios() {
    RemedioService.buscarRemedios().then((remedios) => {
      this.setState({ remedios: remedios });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Estado no DidUpdate:", this.state.remedios);
    console.log("Remedios anterior no DidUpdate:", prevState.remedios);
    if (prevState.remedios === !this.state.remedios) {
      this.state({ remediosEmEdicao: { id: 1 } });
      console.log("Remedio em edição no DidUpdate:", this.state.remedios);
    }
  }

  editarRemedio = (remedio) => {
    this.setState({ remedioEmEdicao: remedio });
  };

  excluirRemedio(remedioId) {
    console.log("RemedioId:", remedioId);
    this.setState({
      remedios: this.state.remedios.filter(
        (remedios) => remedios.id !== alunoId
      ),
    });
  }

  // classComponente é sempre com this
  render() {
    console.log("Estado", this.state);
    return (
      <AlterarDados titulo="Remédios">
        <Section titulo="Cadastro de Remedios" remedios={this.state.remedios}>
          <span>{this.state.remedioEmEdicao?.nome}</span>
        </Section>

        <Section titulo="Lista de Remedios">
          <ListaRemedio
            remedios={this.state.remedios}
            editar={this.editarRemedio}
            excluir={this.excluirRemedio}
          />
        </Section>
      </AlterarDados>
    );
  }
}
export default Remedio;

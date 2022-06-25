import React from "react";

const mainPage = {
  height: "auto",
  width: "95%",
  textAlign: "center",
};

// const AlterarDadosPage = () => {
//   return (
//     <div>
//       <Navigation />
//       <h1>Alterar dados</h1>
//     </div>
//   );
// };

// export default AlterarDadosPage;

class AlterarDadosPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={mainPage}>
        <div>
          {/* TROCAR NOME */}
          <h1>Remédios</h1>
          {this.props.titulo}
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default AlterarDadosPage;

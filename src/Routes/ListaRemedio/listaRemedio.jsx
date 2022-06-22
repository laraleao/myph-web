import React from "react";
import Navigation from "../../Navigation/navigation";

const container = {
  backgroundColor: "white",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: 5,
};

const textRemedio = {
  fontSize: 40,
  fontWeight: "bold",
  letterSpacing: 0.25,
  color: "#2E798A",
  textAlign: "center",
};

const ListaRemedio = () => {
  // const {remedios} = props;

  return (
    <div style={container}>
      <Navigation />
      <h1 style={textRemedio}>Listagem de Remédio</h1>

    </div>
  );
};

export default ListaRemedio;

import React from "react";
import { AuthContext } from "../../contexts/auth";
import Navigation from "../../Navigation/navigation";
import { removeUserFromLocalStorageAndRedirect } from "../../util/utils";

const mainPage = {
  height: "auto",
  width: "95%",
  textAlign: "center",
};

const button = {
  textDecoration: "none",
  border: "none",
  backgroundColor: "#22577A",
  alignItems: "center",
  justifyContent: "center",
  height: 36,
  width: 100,
  color: "white",
  borderRadius: 3,
  cursor: "pointer",
  fontSize: 20,
};

class AlterarDadosPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Navigation />
        <div style={mainPage}>
          <button
            style={button}
            type="submit"
            onClick={() => removeUserFromLocalStorageAndRedirect()}
          >
            Sair
          </button>
        </div>
      </>
    );
  }
}

export default AlterarDadosPage;

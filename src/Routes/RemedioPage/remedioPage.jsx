import React, { useState } from "react";
import Navigation from "../../Navigation/navigation";
import { HiOutlineCursorClick } from "react-icons/hi";

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

const text = {
  alignItems: "center",
  color: "#091357",
  fontSize: 18,
  fontWeight: "bold",
  justifyContent: "center",
  letterSpacing: 0.25,
  padding: 8,
};

const input = {
  justifyContent: "center",
  alignItems: "center",
  marginTop: 8,
  height: 35,
  width: 200,
  margin: 8,
  borderWidth: 1,
  borderRadius: 2,
  padding: 8,
};

const espaco = {
  padding: 15,
};

const buttonCount = {
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  border: "none",
  backgroundColor: "#22577A",
  height: 30,
  width: 30,
  color: "white",
  borderRadius: 3,
  cursor: "pointer",
  fontSize: 20,
  margin: 30,
};

const button = {
  textDecoration: "none",
  border: "none",
  backgroundColor: "#22577A",
  alignItems: "center",
  justifyContent: "center",
  height: 46,
  width: 120,
  color: "white",
  borderRadius: 3,
  cursor: "pointer",
  fontSize: 20,
  margin: 15,
};

//  FAZER
const Remedio = () => {
  const [nome, setNomeRemedio] = useState("");
  const [vencimento, setVencimento] = useState("");
  const [count, setCount] = useState(0);
  const [qtde, setQtde] = useState("");

  const addCountHandler = () => {
    setCount(count + 1);
  };
  const removeCountHandler = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };

  //  const [associar, setAssociar] = useState("");

  //  if (go === false) {
  return (
    <div>
      <Navigation />

      <div style={container}>
        <h1 style={textRemedio}>Cadastro de Remédio</h1>

        <div style={espaco}>
          <label style={text}>Nome do Remédio:</label>
          <input
            required
            style={input}
            type="text"
            value={nome}
            onChange={(e) => setNomeRemedio(e.target.value)}
          ></input>
        </div>
        <div style={espaco}>
          <label style={text}>Validade:</label>
          <input
            required
            style={input}
            type="text/number"
            value={vencimento}
            onChange={(e) => setVencimento(e.target.value)}
          ></input>
        </div>

        <div>
          <button
            style={buttonCount}
            value={qtde}
            onClick={addCountHandler}
            onChange={(e) => setQtde(e.target.value)}
          >
            +
          </button>
          <label
            style={{
              color: "#091357",
              fontSize: 22,
              fontWeight: "bold",
              letterSpacing: 0.25,
            }}
          >
            A quantidade é de: <spam style={{ color: "#2E798A" }}>{count}</spam>
          </label>
          <button
            style={buttonCount}
            value={qtde}
            onClick={removeCountHandler}
            onChange={(e) => setQtde(e.target.value)}
          >
            -
          </button>
        </div>

        <div style={espaco}>
          <a
            className="bula"
            href="https://www.bulario.com/"
            style={{
              justifyContent: "center",
              alignItems: "center",
              textDecoration: "none",
              fontSize: 22,
              color: "red",
              fontWeight: "bold",
            }}
          >
            <spam style={{ color: "black" }}>Caso precise:</spam> Consulte a
            BULA aqui{" "}
            <spam style={{ color: "black" }}>
              <HiOutlineCursorClick />
            </spam>
          </a>
        </div>

        {/* CRIAR FUNÇÃO ONCLICK */}
        <button style={button} type="submit">
          Cadastrar
        </button>

        {/* 
 
        <button>
         <text style={styles.text}>Associar remédio</text>
         <input
           style={styles.input}
           onChangeText={setAssociar}
           value={associar}
         />
       </button>

       CRIAR FUNCAO
       <button onPress={() => FUNCAO()} style={styles.button}>
         <text style={styles.buttonText}>Cadastrar</text>
      </button>
    </div>
    </div> */}
      </div>
    </div>
  );
};
export default Remedio;

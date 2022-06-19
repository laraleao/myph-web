import React, { useState } from "react";
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
  //  const [url, setUrl] = useState("");
  //  const [go, setGo] = useState(false);
  //  const [qtde, setQtde] = useState("");
  //  const [associar, setAssociar] = useState("");

  //  if (go === false) {
  return (
    <div>
      <Navigation />

      <div style={container}>
        <h1 style={textRemedio}>Remédios</h1>

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

        {/* QUANTIDADE */}
        {/* FAZER CONDIÇÃO PARA TROCAR DE COR E PARA NÃO SER NEGATIVO */}
        <div>
          <button
            style={buttonCount}
            minValue={0}
            maxValue={50}
            onClick={() => setCount(count + 1)}
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
            A quantidade é de: <span style={{ color: "#2E798A" }}>{count}</span>
          </label>
          <button
            style={buttonCount}
            minValue={0}
            maxValue={50}
            onClick={() => setCount(count - 1)}
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
            <spam style={{ color: "green" }}>Caso precise:</spam> Consulte a
            BULA aqui
          </a>
        </div>

        {/* CRIAR FUNÇÃO ONCLICK */}
        <button style={button} type="submit">
          Cadastrar
        </button>

        {/* 
       
       <button>
         <text
           style={styles.text}
           onChangeText={(text) => setUrl(text)}
           value={url}
         >
           Bula
         </text>
         <button onPress={() => setGo(true)} title="Pesquisar Bula" />
       </button>

       <text style={styles.text}>Quantidade</text>
       <input
         style={styles.input}
         value={qtde}
         onChangeText={setQtde}
         totalWidth={140}
         totalHeight={50}
         minValue={1}
         maxValue={50}
         valueType="integer"
         iconSize={22}
         step={1.5}
         rounded
         textColor="#091357"
         rightButtonBackgroundColor="#22577E"
         leftButtonBackgroundColor="#5584AC"
       />

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

import React from "react";
import Navigation from "../../Navigation/navigation";
// import { AuthContext } from "../../contexts/auth";

const HomePage = () => {
  // const { authenticated, logout } = useContext(AuthContext);

  // const handleLogout = () => {
  //   logout;
  // };

  return (
    <div>
      <Navigation />
      <h1>Olá, @</h1>
      {/* <p>{String(authenticated)}</p>



      <button onClick={{ handleLogout }}>Sair</button> */}
    </div>
  );

  // const Inicio = () => {
  //   const [password, setPassword] = useState('');
  //   const [usuario, setUsuario] = useState('');

  //   handleAlterPress = async () => {
  //     if (password.length === 0) {
  //       return;
  //     } else {
  //       try {
  //         const response = await api.post('/usuario/login', {
  //           password: password,
  //         });
  //         if (password != null) {
  //           console.log('Não é possível alterar');
  //         } else {
  //           console.log('Senha alterada');
  //         }
  //       } catch (e) {
  //         console.log(e);
  //       }
  //     }
  //   };

  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.text}> Bem vindo</Text>

  //       <TouchableHighlight
  //         onPress={() => handleAlterPress()}
  //         style={styles.buttonGerencia}>
  //         <Text style={styles.buttonText}>Gerenciar Remédios</Text>
  //       </TouchableHighlight>

  //       <TouchableHighlight
  //         onPress={() => handleAlterPress()}
  //         style={styles.buttonGerencia}>
  //         <Text style={styles.buttonText}>Gerenciar Usuários</Text>
  //       </TouchableHighlight>

  //       <TouchableHighlight
  //         onPress={() => handleAlterPress()}
  //         style={styles.button}>
  //         <Text style={styles.buttonText}>Alterar usuário</Text>
  //       </TouchableHighlight>

  //       <TouchableHighlight
  //         onPress={() => handleAlterPress()}
  //         style={styles.button}>
  //         <Text style={styles.buttonText}>Alterar senha</Text>
  //       </TouchableHighlight>
  //     </View>
  //   );
  // };
};

export default HomePage;

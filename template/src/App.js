import React from "react";
import "./App.css";
import logo from "./img/logo.png";
import {Footer} from './components/footer'
import {RedesSociais} from './components/redessociais'
 function App() {
  const onClickBotao = () => {
    alert("Botão foi clicado!");
  };

  return (
    <div className="App">
      <h1>Aprenda React na Labenu!</h1>
      <div>
        <div>
          <img className={"Logo"} src={logo} alt={"logo"} />
        </div>
        <RedesSociais/>
        <div>
          <a href="https://labenu.com.br">Site da Labenu</a>
        </div>
        <div>
          <button onClick={onClickBotao}> Clique aqui! </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default App
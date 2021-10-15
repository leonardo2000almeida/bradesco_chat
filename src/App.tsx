import React from "react";
import { Header } from "./components/Header/Header";
import Main from "./components/Main/Main";
import style from "./styles/app.module.scss";

function App() {
  return (
    <div className={style.app}>
      <Header />
      <Main />
    </div>
  );
}

export default App;

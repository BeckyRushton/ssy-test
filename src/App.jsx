import Head from "./containers/Head/Head";
import Main from "./containers/Main/Main";
import "./styles/app.scss";
import React from "react";

function App() {
  return (
    <div className="app">
      <Head />
      <Main />
    </div>
  );
}

export default App;

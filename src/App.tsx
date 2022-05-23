import React from "react";
//CSS
import "./App.css";

//Componentes
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Todos</h1>
      </header>
      <main>
        <Todos />
      </main>
    </div>
  );
}

export default App;

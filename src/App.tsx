import React from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <InputField />
      <TodoList />
    </div>
  );
}

export default App;

import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "./store/todoSlice";

import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

import "./App.css";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText("");
  };

  return (
    <div className="App">
      <h1 className="mt-5">Список дел</h1>
      <TodoList />
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
    </div>
  );
}

export default App;

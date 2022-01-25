import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { addTodo, fetchTodos } from "./store/todoSlice";

import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

import "./App.css";

function App() {
  const [text, setText] = useState("");
  //достаем функцию диспетчер
  const dispatch = useDispatch();

  const addTask = () => {
    //вызываем функцию диспетчер и передаем в нее событие (набор данных)
    dispatch(addTodo({ text }));
    setText("");
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="App">
      <h1 className="mt-5">Список дел</h1>
      <TodoList />
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
    </div>
  );
}

export default App;

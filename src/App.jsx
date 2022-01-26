import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTodo, fetchTodos } from "./store/todoSlice";

import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

import "./App.css";

function App() {
  const [text, setText] = useState("");
  const { status, error } = useSelector((state) => state.app);
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
      <h1 className="mt-5">To-do list</h1>
      {status === "loading" && <h2>Loading...</h2>}
      {error && <h2>An error has occurred: {error}</h2>}
      <TodoList />
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
    </div>
  );
}

export default App;

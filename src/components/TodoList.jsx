import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = ({ toggleTodoComplete, removeTodo }) => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <ul className="list-group list-group-numbered fs-5">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          toggleTodoComplete={toggleTodoComplete}
          removeTodo={removeTodo}
          {...todo}
        />
      ))}
    </ul>
  );
};
export default TodoList;

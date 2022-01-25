import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodoComplete, removeTodo }) => {
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

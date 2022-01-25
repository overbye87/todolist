const TodoItem = ({ id, text, completed, toggleTodoComplete, removeTodo }) => {
  return (
    <li className="list-group-item">
      <input
        className="form-check-input"
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodoComplete(id)}
      />
      <span className="m-2">{text}</span>
      <button className="btn btn-sm btn-danger" onClick={() => removeTodo(id)}>
        &times;
      </button>
    </li>
  );
};
export default TodoItem;

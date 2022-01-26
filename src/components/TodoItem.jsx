import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodoComplete } from "../store/todoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  return (
    <li className="list-group-item">
      <input
        className="form-check-input"
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoComplete({ id }))}
      />
      <span className="m-2">{title}</span>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => dispatch(deleteTodo(id))}
      >
        &times;
      </button>
    </li>
  );
};
export default TodoItem;

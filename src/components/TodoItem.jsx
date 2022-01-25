import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoComplete } from "../store/todoSlice";

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <li className="list-group-item">
      <input
        className="form-check-input"
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoComplete({ id }))}
      />
      <span className="m-2">{text}</span>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => dispatch(removeTodo({ id }))}
      >
        &times;
      </button>
    </li>
  );
};
export default TodoItem;

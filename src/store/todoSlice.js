import { createSlice } from "@reduxjs/toolkit";
//создали редьюсер срез "todos"
const todoSlice = createSlice({
  // имя среза
  name: "todos",
  //начальное состояние
  initialState: {
    todos: [],
  },
  //набор редьюсеров это события и логика обработки событий
  reducers: {
    //событие "добавить запись"
    //данные переданные в событие через функцию диспетчера попадают в action
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        //данные находятся в action.payload
        text: action.payload.text,
        completed: false,
      });
    },
    //событие "удалить запись"
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    //событие "пометить сделанной"
    toggleTodoComplete(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggledTodo.completed = !toggledTodo.completed;
    },
  },
});

//экспортируем все события среза во внешний мир
export const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;

//экспортируем сам редьюсер срез "todos"
export default todoSlice.reducer;

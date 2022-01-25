import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async function () {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    return data;
  }
);
//создали редьюсер срез "todos"
const todoSlice = createSlice({
  // имя среза
  name: "todos",
  //начальное состояние
  initialState: {
    todos: [],
    status: null,
    error: null,
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
  extraReducers: {
    [fetchTodos.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.todos = action.payload;
    },
    [fetchTodos.rejected]: (state, action) => {},
  },
});

//экспортируем все события среза во внешний мир
export const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;

//экспортируем сам редьюсер срез "todos"
export default todoSlice.reducer;

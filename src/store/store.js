import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

export default configureStore({
  //создали стор
  reducer: {
    //ключ среза "app" имя можно любое
    //подключаем сюда наш срез кторый импортировали
    app: todoReducer,
    //срезов может быть любое количество
  },
});

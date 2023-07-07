import { configureStore } from "@reduxjs/toolkit";
import { BooksReducer } from "./BooksSlice";

let store = configureStore({
  reducer: {
    Books: BooksReducer,
  },
});

export default store;

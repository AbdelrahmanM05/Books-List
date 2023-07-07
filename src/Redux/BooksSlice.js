import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../firebase/config";
import { onValue, ref, set } from "firebase/database";
import { uid } from "uid";
let initialState = { booksArray: [] };

export let addBooks = createAsyncThunk("books/addBooks", (book) => {
  const uuid = uid()
  set(ref(db,`/${uuid}`), {...book,uuid});
});



let booksSlice = createSlice({
  name: "books",
  initialState,
  extraReducers: (bulider) => {
    bulider.addCase("fulfilled", (state, actions) => {
      state.booksArray.push(actions.payload);
      console.log(state.booksArray);
    });
  },
});

export let BooksReducer = booksSlice.reducer;

//     postOn: new Intl.DateTimeFormat("en-US", {
//         year: "numeric",
//         month: "long",
//         hour: "2-digit",
//         minute: "2-digit",
//       }).format(time),
//     })

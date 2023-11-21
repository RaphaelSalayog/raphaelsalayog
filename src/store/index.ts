import { configureStore } from "@reduxjs/toolkit";
import buttonSlice from "./reducers/buttonSlice";

const store = configureStore({
  reducer: {
    button: buttonSlice,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "/src/redux/employeeSlice.js";

export const store = configureStore({
  reducer: {
    employees: employeeReducer,
  },
});

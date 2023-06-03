import { configureStore } from "@reduxjs/toolkit";
import employeesSlice from "./Employees/employeesSlice";

export default configureStore({
    reducer: {
        employees: employeesSlice,
    }
});
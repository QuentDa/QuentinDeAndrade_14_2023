import { createSlice } from '@reduxjs/toolkit';
import employeeData from './../../mock/fakeEmployees';

const employeesSlice = createSlice({
    name: 'employees',
    initialState: {
        employees: [],
        employee: {
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            anniversaryDate: '',
            street: '',
            city: '',
            state: '',
            zip: '',
            department: '',
        },
        isLoading: false,
        error: false,
        fakeEmployeesLoaded: false,
    },
    reducers: {
        addFakeEmployees: (state) => {
            state.employees.push(...employeeData);
            state.fakeEmployeesLoaded = true;
        },
        addEmployee: (state, action) => {
            state.employees.push(action.payload);
        }
    }});

export const { 
    addFakeEmployees,
    addEmployee 
} = employeesSlice.actions;

export default employeesSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

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
    },
    reducers: {
        updateEmployee: (state, action) => {
            state.employee.firstName = action.payload.firstName;
            state.employee.lastName = action.payload.lastName;
            state.employee.dateOfBirth = action.payload.dateOfBirth;
            state.employee.anniversaryDate = action.payload.anniversaryDate;
            state.employee.street = action.payload.street;
            state.employee.city = action.payload.city;
            state.employee.state = action.payload.state;
            state.employee.zip = action.payload.zip;
            state.employee.department = action.payload.department;
        },
        addEmployee: (state, action) => {
            state.employees.push(action.payload);
        }
    }});

export const { 
    updateEmployee, 
    addEmployee 
} = employeesSlice.actions;

export default employeesSlice.reducer;

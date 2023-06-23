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
        // updateEmployee: (state, action) => {
        //     state.employee.firstName = action.payload.firstName;
        //     state.employee.lastName = action.payload.lastName;
        //     state.employee.dateOfBirth = action.payload.dateOfBirth;
        //     state.employee.anniversaryDate = action.payload.anniversaryDate;
        //     state.employee.street = action.payload.street;
        //     state.employee.city = action.payload.city;
        //     state.employee.state = action.payload.state;
        //     state.employee.zip = action.payload.zip;
        //     state.employee.department = action.payload.department;
        // },
        addEmployee: (state, action) => {
            state.employees.push(action.payload);
        }
    }});

export const { 
    addFakeEmployees,
    addEmployee 
} = employeesSlice.actions;

export default employeesSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const employeesSlice = createSlice({
    name: 'employees',
    initialState: {
        employees: [
            {
                firstName: 'John',
                lastName: 'Doe',
                dateOfBirth: '1990-01-01',
                anniversaryDate: '2021-01-01',
                street: '123 Main St',
                city: 'City',
                state: 'State',
                zip: '12345',
                department: 'Sales',
              },
              {
                firstName: 'Jane',
                lastName: 'Smith',
                dateOfBirth: '1995-02-02',
                anniversaryDate: '2022-02-02',
                street: '456 Elm St',
                city: 'City',
                state: 'State',
                zip: '67890',
                department: 'Marketing',
              },
              {
                firstName: 'David',
                lastName: 'Johnson',
                dateOfBirth: '1988-05-15',
                anniversaryDate: '2020-05-15',
                street: '789 Oak Ave',
                city: 'City',
                state: 'State',
                zip: '54321',
                department: 'Engineering',
              },
              {
                firstName: 'Sarah',
                lastName: 'Williams',
                dateOfBirth: '1993-07-10',
                anniversaryDate: '2021-07-10',
                street: '321 Pine St',
                city: 'City',
                state: 'State',
                zip: '98765',
                department: 'Human Resources',
              },
              {
                firstName: 'Michael',
                lastName: 'Brown',
                dateOfBirth: '1992-09-20',
                anniversaryDate: '2022-09-20',
                street: '654 Cedar Rd',
                city: 'City',
                state: 'State',
                zip: '13579',
                department: 'Sales',
              },
              {
                firstName: 'Emily',
                lastName: 'Jones',
                dateOfBirth: '1991-03-12',
                anniversaryDate: '2021-03-12',
                street: '987 Maple Ave',
                city: 'City',
                state: 'State',
                zip: '24680',
                department: 'Marketing',
              },
              {
                firstName: 'Christopher',
                lastName: 'Davis',
                dateOfBirth: '1994-11-28',
                anniversaryDate: '2023-11-28',
                street: '741 Oak St',
                city: 'City',
                state: 'State',
                zip: '90876',
                department: 'Engineering',
              },
              {
                firstName: 'Olivia',
                lastName: 'Clark',
                dateOfBirth: '1990-06-05',
                anniversaryDate: '2022-06-05',
                street: '369 Elm Ave',
                city: 'City',
                state: 'State',
                zip: '56789',
                department: 'Human Resources',
              },
              {
                firstName: 'William',
                lastName: 'Wilson',
                dateOfBirth: '1993-04-18',
                anniversaryDate: '2021-04-18',
                street: '852 Pine Rd',
                city: 'City',
                state: 'State',
                zip: '10293',
                department: 'Sales',
              },
              {
                firstName: 'Sophia',
                lastName: 'Thomas',
                dateOfBirth: '1989-12-08',
                anniversaryDate: '2020-12-08',
                street: '135 Cedar Ave',
                city: 'City',
                state: 'State',
                zip: '67421',
                department: 'Marketing',
              },
        ],
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

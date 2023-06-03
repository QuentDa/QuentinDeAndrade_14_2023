export function getEmployee(state) {
    const firstName = state.employees.employee.firstName;
    const lastName = state.employees.employee.lastName;
    const dateOfBirth = state.employees.employee.dateOfBirth;
    const anniversaryDate = state.employees.employee.anniversaryDate;
    const street = state.employees.employee.street;
    const city = state.employees.employee.city;
    const stateName = state.employees.employee.state;
    const zip = state.employees.employee.zip;
    const department = state.employees.employee.department;
    return { firstName, lastName, dateOfBirth, anniversaryDate, street, city, stateName, zip, department };
}
export function validate(employee) {
    const testError = {}

    if (employee.firstName === '') {
        testError.firstName = 'First Name is required';
    }
    if (employee.lastName === '') {
        testError.lastName = 'Last Name is required';
    };
    if (employee.dateOfBirth === '') {
        testError.dateOfBirth = 'Date of Birth is required';
    }
    if (employee.anniversaryDate === '') {
        testError.anniversaryDate = 'Anniversary Date is required';
    }
    if (employee.street === '') {
        testError.street = 'Street is required';
    }
    if (employee.city === '') {
        testError.city = 'City is required';
    }
    if (employee.stateName === '') {
        testError.stateName = 'State is required';
    }
    if (employee.zip === '') {
        testError.zip = 'Zip is required';
    }
    if (employee.department === '') {
        testError.department = 'Department is required';
    }

    return testError;
}
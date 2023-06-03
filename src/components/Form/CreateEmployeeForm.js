import React, { useState } from 'react';
import './CreateEmployeeForm.css'
import Button from '../Button/Button';
import States from './States';
import DatePicker from './DatePicker';
//DEPENDENCIES REDUX
import { useDispatch, useSelector } from 'react-redux';
import { updateEmployee, addEmployee } from '../../store/Employees/employeesSlice';
import { getEmployee } from '../../store/Employees/employeesSelector';

export default function CreateEmployeeForm() {
  //REDUX HOOKS
  const dispatch = useDispatch();
  const employee = useSelector(getEmployee);

  //GENEREL STATE
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [anniversaryDate, setAnniversaryDate] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [stateName, setStateName] = useState('');
  const [zip, setZip] = useState('');
  const [department, setDepartment] = useState('');

  //Handle Changes (DatePicker and State get their own function in their own components)
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleStreetChange = (event) => {
    setStreet(event.target.value);
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleZipChange = (event) => {
    setZip(event.target.value);
  };
  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    //REDUX
    const newEmployee = {
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      anniversaryDate: anniversaryDate,
      street: street,
      city: city,
      state: stateName,
      zip: zip,
      department: department
    };
    dispatch(updateEmployee(newEmployee));
    dispatch(addEmployee(newEmployee));
  };

  return (
    <div className="container">
      <form action="#" id="create-employee" onSubmit={handleSubmit}>
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" onChange={handleFirstNameChange} />

        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" onChange={handleLastNameChange} />

        <DatePicker label="Date of Birth" id="date-of-birth" date={dateOfBirth} setDate={setDateOfBirth} />

        <DatePicker label="Anniversary Date:" id="anniversary-date" date={anniversaryDate} setDate={setAnniversaryDate} />

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input id="street" type="text" onChange={handleStreetChange} />

          <label htmlFor="city">City</label>
          <input id="city" type="text" onChange={handleCityChange} />

          <States setState={setStateName}/>

          <label htmlFor="zip-code">Zip Code</label>
          <input id="zip-code" type="number" onChange={handleZipChange} />
        </fieldset>

        <label htmlFor="department">Department</label>
        <select name="department" id="department" onChange={handleDepartmentChange} >
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>

        <Button id="saveButton" ButtonText="Save">Your employee {employee.firstName} {employee.lastName} has been created with success.</Button>
      </form>
    </div>
  );
}

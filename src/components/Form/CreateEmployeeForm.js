import React, { useState } from 'react';
import { useModal } from '@eiken/modal-react';
import './CreateEmployeeForm.css'
import Button from '../Button/Button';
import States from './States';
import DatePicker from './DatePicker';
//DEPENDENCIES REDUX
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../store/Employees/employeesSlice';

export default function CreateEmployeeForm() {
  //MODAL
  const { show, openModal, closeModal, Modal } = useModal();

  //REDUX HOOKS
  const dispatch = useDispatch();

  //GENERAL STATE
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [dateOfBirth, setDateOfBirth] = useState('');
  // const [anniversaryDate, setAnniversaryDate] = useState('');
  // const [street, setStreet] = useState('');
  // const [city, setCity] = useState('');
  // const [stateName, setStateName] = useState('');
  // const [zip, setZip] = useState('');
  // const [department, setDepartment] = useState('');

  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    anniversaryDate: '',
    street: '',
    city: '',
    stateName: '',
    zip: '',
    department: '',
  }) 

  //Handle Changes (DatePicker and State get their own function in their own components)
  const handleDateOfBirthChange = (event) => {
    setEmployee({
      ...employee,
      dateOfBirth: event.target.value,
    })
  }
  const handleAnniversaryDateChange = (event) => {
    setEmployee({
      ...employee,
      anniversaryDate: event.target.value,
    })
  }
  const handleStateNameChange = (event) => {
    setEmployee({
      ...employee,
      stateName: event.target.value,
    })
  }
  const handleFirstNameChange = (event) => {
    setEmployee({
      ...employee,
       firstName: event.target.value,
      });
  };
  const handleLastNameChange = (event) => {
    setEmployee({
      ...employee,
       lastName: event.target.value,
      });
  };
  const handleStreetChange = (event) => {
    setEmployee({
      ...employee,
       street: event.target.value,
    });
  };
  const handleCityChange = (event) => {
    setEmployee({
      ...employee,
       city: event.target.value,
      });
  };
  const handleZipChange = (event) => {
    setEmployee({
      ...employee,
       zip: event.target.value,
      });
  };
  const handleDepartmentChange = (event) => {
    setEmployee({
      ...employee,
       department: event.target.value,
      });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    //REDUX
    const newEmployee = {
      firstName: employee.firstName,
      lastName: employee.lastName,
      dateOfBirth: employee.dateOfBirth,
      anniversaryDate: employee.anniversaryDate,
      street: employee.street,
      city: employee.city,
      state: employee.stateName,
      zip: employee.zip,
      department: employee.department
    };
    dispatch(addEmployee(newEmployee));
  };

  return (
    <div className="container">
      <form action="#" id="create-employee" onSubmit={handleSubmit}>
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" onChange={handleFirstNameChange} />

        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" onChange={handleLastNameChange} />

        <DatePicker label="Date of Birth" id="date-of-birth" date={employee.dateOfBirth} setDate={handleDateOfBirthChange} />

        <DatePicker label="Anniversary Date:" id="anniversary-date" date={employee.anniversaryDate} setDate={handleAnniversaryDateChange} />

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input id="street" type="text" onChange={handleStreetChange} />

          <label htmlFor="city">City</label>
          <input id="city" type="text" onChange={handleCityChange} />

          <States setState={handleStateNameChange}/>

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

        <Button buttonText="Save" openModal={openModal}></Button>
        <Modal show={show} onClose={closeModal} title="Employee Created">
          Your employee {employee.firstName} {employee.lastName} has been created with success.
        </Modal>
      </form>
    </div>
  );
}

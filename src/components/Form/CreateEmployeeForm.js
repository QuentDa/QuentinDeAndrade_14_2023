import React, { useState } from 'react';
import { useModal } from '@eiken/modal-react';
import './CreateEmployeeForm.css'
import Button from '../Button/Button';
import States from './States';
import DatePicker from './DatePicker';
//DEPENDENCIES REDUX
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../store/Employees/employeesSlice';
import { validate } from './Validate';

export default function CreateEmployeeForm() {
  //MODAL
  const { show, openModal, closeModal, Modal } = useModal();

  //REDUX HOOKS
  const dispatch = useDispatch();

  //STATE
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    anniversaryDate: '',
    street: '',
    city: '',
    stateName: 'Alabama',
    zip: '',
    department: 'Sales',
  })

  //ERROR
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    anniversaryDate: '',
    street: '',
    city: '',
    stateName: '',
    zip: '',
    department: '',
  });

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
    const testError = validate(employee);
    setError(testError)

    if (Object.keys(testError).length === 0) {
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

      //RESET FORM
      setFormSubmitted(true);
    }
  };

  function handleCloseModal() {
    closeModal();
    setEmployee({
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
  }

  return (
    <form action="#" id="create-employee" className='w-full max-w-lg mx-auto' onSubmit={handleSubmit}>
      <legend className='text-2xl tracking-tight text-gray-900 mb-4'>Informations</legend>
      <div className='grid grid-cols-2 gap-3'>
        <div>
          <input placeholder='First Name' type="text" id="first-name" value={employee.firstName} onChange={handleFirstNameChange}
            className='border border-gray-300 rounded w-full h-10 py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500'
          />
          {error.firstName && (<p className='text-red-500 text-xs italic'>{error.firstName}</p>)}
        </div>

        <div className='flex flex-col'>
          <input placeholder='Last Name' type="text" id="last-name" onChange={handleLastNameChange}
            className='border border-gray-300 rounded w-full h-10 py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500'
          />
          {error.lastName && (<p className='text-red-500 text-xs italic'>{error.lastName}</p>)}
        </div>

        <DatePicker label="Date of Birth" id="date-of-birth" date={employee.dateOfBirth} setDate={handleDateOfBirthChange} error={error.dateOfBirth} />

        <DatePicker label="Anniversary Date" id="anniversary-date" date={employee.anniversaryDate} setDate={handleAnniversaryDateChange} error={error.anniversaryDate} />

        <fieldset className="address col-span-2 mt-4">
          <div className='flex flex-col'>
            <legend className='text-2xl tracking-tight text-gray-900 mb-4'>Address</legend>

            <input placeholder='Street' id="street" type="text" onChange={handleStreetChange}
              className='border border-gray-300 rounded w-full h-10 py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500'
            />
            {error.street && (<p className='text-red-500 text-xs italic'>{error.street}</p>)}
          </div>
          <div className='grid grid-cols-3 gap-2 mt-4'>
            <div className='flex flex-col'>
              <input placeholder='City' id="city" type="text" onChange={handleCityChange}
                className='border border-gray-300 rounded w-full h-10 py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500 mt-6'
              />
              {error.city && (<p className='text-red-500 text-xs italic'>{error.city}</p>)}
            </div>

            <States setState={handleStateNameChange} error={error.stateName} value={employee.stateName} />

            <div className='flex flex-col'>
              <input placeholder='Zip Code' id="zip-code" type="number" onChange={handleZipChange}
                className='border border-gray-300 rounded w-full h-10 py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500 mt-6'
              />
              {error.zip && (<p className='text-red-500 text-xs italic'>{error.zip}</p>)}
            </div>
          </div>
        </fieldset>

        <div className='col-span-2 flex flex-col'>
          <label htmlFor="department">Department</label>
          <select name="department" id="department" onChange={handleDepartmentChange}
            className='border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500 mx-auto'
          >
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
          {error.department && (<p className='text-red-500 text-xs italic'>{error.department}</p>)}
        </div>

        <div className="col-span-2 w-full flex justify-center items-center mt-4">
          <Button buttonText="Save" onClick={openModal}></Button>
        </div>
        {formSubmitted && (
          <Modal show={show} onClose={handleCloseModal} title="Employee Created">
            Your employee {employee.firstName} {employee.lastName} has been created with success.
          </Modal>
        )}
      </div>
    </form>
  );
}

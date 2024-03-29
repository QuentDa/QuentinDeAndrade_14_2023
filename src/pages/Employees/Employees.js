import { useEffect } from "react";
import DataTable from "../../components/Table/DataTable";
import { useDispatch, useSelector } from "react-redux";
import { addFakeEmployees } from "../../store/Employees/employeesSlice";
import TeamIcon from "./TeamIcon";
import './Employees.css'
export default function Employees() {
  //ADDING FAKE EMPLOYEES
  const dispatch = useDispatch();
  const fakeEmployeesLoaded = useSelector((state) => state.employees.fakeEmployeesLoaded);

  useEffect(() => {
    if (!fakeEmployeesLoaded) {
      dispatch(addFakeEmployees());
    }
  }, [dispatch, fakeEmployeesLoaded]);

  //CREATING TABLE
  const employees = useSelector(state => state.employees.employees);
  const columns = [
    { key: 'firstName', label: 'First Name' },
    { key: 'lastName', label: 'Last Name' },
    { key: 'dateOfBirth', label: 'Date of Birth' },
    { key: 'anniversaryDate', label: 'Anniversary Date' },
    { key: 'street', label: 'Street' },
    { key: 'city', label: 'City' },
    { key: 'state', label: 'State' },
    { key: 'zip', label: 'Zip' },
    { key: 'department', label: 'Department' },
  ];

  return (
    <div className="employees xl:w-1/2 flex flex-col items-center justify-center mx-auto relative">
      <div className='TeamIcon'>
        <TeamIcon />
      </div>
      <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900">Employees</h2>
      <DataTable data={employees} columns={columns} />
    </div>
  );
}
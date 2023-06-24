import { useEffect } from "react";
import DataTable from "../../components/Table/DataTable";
import { useDispatch, useSelector } from "react-redux";
import { addFakeEmployees } from "../../store/Employees/employeesSlice";
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
      'First Name',
      'Last Name',
      'Date of Birth',
      'Anniversary Date',
      'Street',
      'City',
      'State',
      'Zip',
      'Department',
    ];

    return (
        <div className="employees">
            <h2>Employees</h2>

            <DataTable data={employees} columns={columns} />
        </div>
    );
}
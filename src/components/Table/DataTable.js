//NEW TABLE CODE
import React, { useState } from 'react';

export default function DataTable({ data, columns }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = data.filter(item =>
    Object.values(item).some(value =>
      value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  return (
    <div>
      <div>
        <input type="text" value={searchQuery} onChange={handleSearchInputChange} placeholder="Search..." />
      </div>
      <table>
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <ul className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index} onClick={() => paginate(index + 1)}>
              <a href="#!">{index + 1}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

//OLD TABLE CODE
// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';

// export default function EmployeeTable() {
//   const employees = useSelector(state => state.employees.employees);

//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6;

//   // State for search query
//   const [searchQuery, setSearchQuery] = useState('');

//   // Filter employees based on search query
//   const filteredEmployees = employees.filter(employee =>
//     Object.values(employee).some(value =>
//       value.toLowerCase().includes(searchQuery.toLowerCase())
//     )
//   );

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentEmployees = filteredEmployees.slice(indexOfFirstItem, indexOfLastItem);

//   // Function to paginate
//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };
//   const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);

//   // Handler for search input change
//   const handleSearchInputChange = (event) => {
//     setSearchQuery(event.target.value);
//     setCurrentPage(1); // Reset pagination when search query changes
//   };

//   return (
//     <div>
//       <div>
//         <input type="text" value={searchQuery} onChange={handleSearchInputChange} placeholder="Search..." />
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Date of Birth</th>
//             <th>Anniversary Date</th>
//             <th>Street</th>
//             <th>City</th>
//             <th>State</th>
//             <th>Zip</th>
//             <th>Department</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentEmployees.map(employee => (
//             <tr key={employee.id}>
//               <td>{employee.firstName}</td>
//               <td>{employee.lastName}</td>
//               <td>{employee.dateOfBirth}</td>
//               <td>{employee.anniversaryDate}</td>
//               <td>{employee.street}</td>
//               <td>{employee.city}</td>
//               <td>{employee.state}</td>
//               <td>{employee.zip}</td>
//               <td>{employee.department}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div>
//         <ul className="pagination">
//           {Array.from({ length: totalPages }, (_, index) => (
//             <li key={index} onClick={() => paginate(index + 1)}>
//               <a href="#!">{index + 1}</a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// //HOW SEARCH WORKS IN THIS CODE
// //local state for search query
// //when the input text changes, the searchQuery is updated with the handleSearchInputChange function
// //when searchQuery changes, the filteredEmployees is updated with the filter function
// //the method Object.values(employee) returns an array of the values of the employee object
// //the method some() checks if at least one element in the array matches
// //the method includes() checks if the value of the element includes the searchQuery
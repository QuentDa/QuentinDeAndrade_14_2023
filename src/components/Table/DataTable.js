//NEW TABLE CODE
import React, { useState } from 'react';
import './DataTable.css'

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

  //SORT FEATURE
  const [sortConfig, setSortConfig] = useState(null);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="table-container">
      <div className="search-container">
        <input type="text" className="search-input" value={searchQuery} onChange={handleSearchInputChange} placeholder="Search..." />
      </div>
      <table className="data-table">
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column}>
                {column}
                <span className="sort-arrow" onClick={() => handleSort(column)}>
                  {sortConfig && sortConfig.key === column && sortConfig.direction === 'asc' ? '▲' : '▼'}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.sort((a, b) => {
            if (sortConfig && sortConfig.direction === 'asc') {
              return a[sortConfig.key].localeCompare(b[sortConfig.key]);
            } else if (sortConfig && sortConfig.direction === 'desc') {
              return b[sortConfig.key].localeCompare(a[sortConfig.key]);
            } else {
              return 0;
            }
          }).map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-container">
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

// //HOW SEARCH WORKS IN THIS CODE
// //local state for search query
// //when the input text changes, the searchQuery is updated with the handleSearchInputChange function
// //when searchQuery changes, the filteredEmployees is updated with the filter function
// //the method Object.values(employee) returns an array of the values of the employee object
// //the method some() checks if at least one element in the array matches
// //the method includes() checks if the value of the element includes the searchQuery
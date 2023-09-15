import React, { useState } from 'react';
import './DataTable.css';

export default function DataTable({ data, columns }) {
  // SEARCH FEATURE
  const [searchQuery, setSearchQuery] = useState('');
  const filteredData = data.filter(item =>
    Object.values(item).some(value =>
      value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  // PAGINATION FEATURE
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(event.target.value);
    setCurrentPage(1);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // SORT FEATURE (based from the columns object send in props)
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
              <th key={column.key}>
                {column.label}
                <span className="sort-arrow" onClick={() => handleSort(column.key)}>
                  {sortConfig && sortConfig.key === column.key && sortConfig.direction === 'asc' ? '▲' : '▼'}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.sort((a, b) => {
            if (sortConfig && sortConfig.direction === 'asc') {
              return a[sortConfig.key].localeCompare(b[sortConfig.key]);
            } else if (sortConfig && sortConfig.direction === 'desc') {
              return b[sortConfig.key].localeCompare(a[sortConfig.key]);
            } else {
              return 0;
            }
          }).slice(indexOfFirstItem, indexOfLastItem).map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-container flex flex-col items-center justify-center">
        <div className='items-per-page-container mb-4 mt-4'>
          <label>Items per page</label>
          <select id="items-per-page" className='border border-gray-300 rounded' value={itemsPerPage} onChange={handleItemsPerPageChange}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        <ul className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <li className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
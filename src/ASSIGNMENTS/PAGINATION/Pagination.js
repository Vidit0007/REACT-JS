import React, { useState } from 'react';
import './Paginstion.css'

function Pagination({ data, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(data.length / itemsPerPage);


  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

 
  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div>
      <div className='app'>
      {currentData.map((item, index) => (
        <div className='item' key={index}>{item}</div>
      ))}
      </div>
      
      <div className="pagination-controls">
        <button className='btn' onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button className='btn' onClick={() => handlePageChange(currentPage + 1)}>Next</button>
      </div>
    </div>
      );
      }

export default Pagination;


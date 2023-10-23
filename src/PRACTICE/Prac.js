import React, { useState } from 'react'

export default function Pagination(data,itemsPerPage) {
    const[currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length/itemsPerPage);// to round off the number to the nearest integer
    const startIndex = (currentPage-1 )*itemsPerPage;
    const endIndex = startIndex + itemsPerPage ;
    const currentData = data.slice(startIndex,endIndex);
    const handleChange = (newPage)=>{
      if(newPage>=1 && newPage<=totalPages){
        setCurrentPage(newPage);
      }
    }
  return (
   <>
   <div>
    {currentData.map((items,index)=>(
        <div key={index}>{items}</div>
        ))}
   </div>
   <button onClick={()=>handleChange(currentPage - 1)}>Previous</button>
   <span>Page {currentPage} of {totalPages}</span>
   <button onClick={()=>handleChange(currentPage + 1)}>Next</button>

   </>
  )
}
//COUNTER PRACTICE
import React, {useState} from 'react'

function Prac() {
    const[counter, setCounter] = useState(0);
    const incrementCount = () => {
        setCounter(counter+1);
    }
    const decrementCount = () => {
        setCounter(counter-1);
    }
    const textClass = counter<0 ? 'redText': '';

  return (
    <>
    <div>
        <h1 className={textClass}> COUNTER - {counter}</h1>
        <button onClick={incrementCount}>+</button>
        <button onClick={decrementCount}>-</button>
        
    </div>
    </>
  )
}

export default Prac;

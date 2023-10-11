import React, {useState } from 'react'

function Name() {
    const [inputValue, setValue]= useState('');

    const handleChange= (e)=>{
        setValue(e.target.value)
    }
   
  return (
    <div>
        <input type='text' placeholder='write here...' onChange={handleChange}></input>
        <p>{inputValue}</p>
        <p>{inputValue.length}</p>

    </div>
  )
}

export default Name
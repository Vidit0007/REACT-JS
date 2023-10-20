import React,{useState} from 'react'

function Name() {
    const [toggelePara,setTogglePara]= useState(false);
    const toggleHandler=()=>{
        setTogglePara(!toggelePara)
    }
    
  return (
    <>
    <button onClick={toggleHandler}>{toggelePara? "HIDE" : "SHOW"}</button>
  {toggelePara && <p> my name is father</p>}
    </>
  
  )
}

export default Name
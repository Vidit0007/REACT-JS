// import React, {useState} from 'react'

// function Name() {
//     const [toggleFirstPara, setShowTogglePara] = useState(false);
//     const handleTogglePara = ()=>{
//         setShowTogglePara(!toggleFirstPara)
//     }
//   return (
//     <>
//      <button onClick={handleTogglePara}>{toggleFirstPara? "Hide" : "Show"}</button>
//     {toggleFirstPara &&
//          <p>Marvel Comics is an American media and entertainment company regarded as one of the “big two” publishers in the comics industry. Its parent company, Marvel Entertainment, 
//             is a wholly owned subsidiary of the Disney Company. Its headquarters are in New York City.</p> }
//     </>
//   )
// }

// export default Name
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
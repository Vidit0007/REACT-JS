// import React, {useState } from 'react'

// function Name() {
//     const [inputValue, setValue]= useState('');

//     const handleChange= (e)=>{
//         setValue(e.target.value)
//     }
   
//   return (
//     <div>
//         <input type='text' placeholder='write here...' onChange={handleChange}></input>
//         <p>{inputValue}</p>
//         <p>{inputValue.length}</p>

//     </div>
//   )
// }

// export default Name
// import React, {useState} from 'react'

// function Name() {
//     const [toggleFirstPara, setShowTogglePara] = useState(true);
//     const handleTogglePara = ()=>{
//         setShowTogglePara(!toggleFirstPara)
//     }
//   return (
//     <>
//      <button onClick={handleTogglePara}>Dabake Dekho</button>
//     {toggleFirstPara ?
//          (<p>Marvel Comics is an American media and entertainment company regarded as one of the “big two” publishers in the comics industry. Its parent company, Marvel Entertainment, is a wholly owned subsidiary of the Disney Company. Its headquarters are in New York City.</p>) 
//          :
//           (<p>Marvel Comics is a comic book publishing house known for creating notable super heroes such as Spider-Man, Iron Man, Captain America, Daredevil, Hulk, Thor, the Avengers, the Guardians of the Galaxy, the X-Men, the Fantastic Four, and Deadpool.</p>)
//         }
//     </>
//   )
// }

// export default Name
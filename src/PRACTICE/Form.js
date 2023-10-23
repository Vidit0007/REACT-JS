import React,{useState} from 'react'

function Form() {
    const [username,setUsername]= useState('')
    const [password,setPassword]= useState('')
    const [error,setError]= useState('')
    const [submit,setSubmit]= useState('')


    const handleSubmit = (e)=>{
      e.preventDefault();
      if (username.length>0 && password.length>0){
        setSubmit(`Username:${username} \n 
        Password :${password}`)
        alert((`Username:${username}\n Password :${password}`))
      }
      else  {
        setError("PLEASE I'M BEGGING YOU TO WRITE SOMETHING") ;
      }
       
          
        
    }
    const handleUsernameChange =(e)=>{
        setUsername(e.target.value);
    }
    const handlePasswordChange= (e)=>
    setPassword(e.target.value)
  return (
    <>
    <div className='contain00'>
    <form onSubmit = {handleSubmit} className='FORM1'>
        <div >
        <label>Username: </label>
<input type='text' placeholder='username' value={username} onChange={handleUsernameChange}></input><br/>
<label>Password :  </label>
<input type='password' placeholder='password'  value={password} onChange={handlePasswordChange}></input>
        </div>
     <button type='submit' className='submit'>Submit</button>
     {error&&<p>{error}</p>}
     {submit&&<p>{submit}</p>}


     </form>

    </div>
    </>
  )
}
export default Form
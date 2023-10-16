// import BACK from './Component/BACK';
import Name from './Component/Name';
import React, {useState} from 'react';
import ToDo from './Component/ToDo';
import TodoList from './Component/TodoList';
// import Fetch from './Component/Fetch';
import Weather from './Component/Wheather';

import './image/weather.jpg';

import './App.css';
import TicTac from './Component/TicTac';
import Form from './Component/Form';



function App() {
  const [listTodo,setListTodo]=useState([]);

  const addList=(inpuText)=>{
    if(inpuText!=='')
    setListTodo([...listTodo,inpuText])
  }
  const deleteListItem=(key)=>{
    let newListTodo=[...listTodo]
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return (
    <>
     
    {/*<div>
      <BACK />
    </div> */}
    <section>
      
     <h1 className='app-heading'>TODO-APP</h1>
        <br/>
       
        <div className='main-container'>
        <div className='card'>
      <div className='center-container'>
        <ToDo addList={addList}  />
       
        
        {listTodo.map((listItem,i)=>{
          return(
          <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>)
        }

        )}
      </div>
     </div>
        </div>
    </section>
    <section className="background-section">
    <div>
      <Weather />
    </div>
    </section>
   <section className="background-section3">
    <div>
      <TicTac />
    </div>
   </section>
   <section className="background-section4">
   <div>
      <Form />
     </div>
     <div>
      <Name />
    </div>
   </section>
    
     
     
    
    
</>
  );
}

export default App;

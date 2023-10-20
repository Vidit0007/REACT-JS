// import BACK from './Component/BACK';
// import Name from './Component/Name';
// import React, {useState} from 'react';
// import ToDo from './Component/ToDo';
// import TodoList from './Component/TodoList';
// import Fetch from './Component/Fetch';
// import Weather from './Component/Wheather';

// import './image/weather.jpg';
// import Counter from './ASSIGNMENTS/COUNTER/Counter';
// import MockApi from './ASSIGNMENTS/FETCH API/MockApi';
import './App.css';
// import TicTac from './Component/TicTac';
// import Form from './ASSIGNMENTS/Form';
// import NASAAPOD from './ASSIGNMENTS/FETCH API/NASAAPOD';
import Pagination from './ASSIGNMENTS/PAGINATION/Pagination';



function App() {
  // const [listTodo,setListTodo]=useState([]);

  // const addList=(inpuText)=>{
  //   if(inpuText!=='')
  //   setListTodo([...listTodo,inpuText])
  // }
  // const deleteListItem=(key)=>{
  //   let newListTodo=[...listTodo]
  //   newListTodo.splice(key,1)
  //   setListTodo([...newListTodo])
  // }
  const data = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7',
    'Item 8',
    'Item 9',
    'Item 10',
   
  ];

  const itemsPerPage = 3;
  return (
    <>
     
    {/*<div>
      <BACK />
    </div> */}
    {/* <section>
      
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
      <Name />
    </div>
   </section> */}
   {/* <section>
     <div>
      <Counter />
     </div>
   </section> */}
   {/* <section>
     <div>
      <MockApi />
     </div>
     <div>
      <Form />
     </div>
   </section> */}
   {/* <section>
     <div>
      <NASAAPOD />
     </div>
   </section> */}
   
     <div className='heading'>
     <h1 >Paginated Data</h1>
      <div className='page'><Pagination data={data} itemsPerPage={itemsPerPage} /></div>
      
     </div>
  
     
    
    
</>
  );
}

export default App;

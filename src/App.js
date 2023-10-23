import React, { useState } from 'react';
import ToDo from './ASSIGNMENTS/TODO LIST/ToDo';
import TodoList from './ASSIGNMENTS/TODO LIST/TodoList';
import Wheather from './ASSIGNMENTS/WEATHERAPI/Wheather'; // Corrected the import
import Counter from './ASSIGNMENTS/COUNTER/Counter';
import MockApi from './ASSIGNMENTS/FETCH API/MockApi';
import './App.css';
import TicTac from './ASSIGNMENTS/TIC TAC TOE/TicTac';
import Form from './PRACTICE/Form';
import NASAAPOD from './ASSIGNMENTS/FETCH API/NASAAPOD';
import Pagination from './ASSIGNMENTS/PAGINATION/Pagination';

function App() {
  const [listTodo, setListTodo] = useState([]);

  const addList = (inputText) => {
    if (inputText !== '') setListTodo([...listTodo, inputText]);
  };

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo(newListTodo);
  };

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
      <section>
        <h1 className='app-heading'>TODO-APP</h1>
        <br />
        <div className='main-container'>
          <div className='card'>
            <div className='center-container'>
              <ToDo addList={addList} />
              {listTodo.map((listItem, i) => (
                <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="background-section">
        <div>
          <Wheather />
        </div>
      </section>
      <section className="background-section3">
        <div>
          <TicTac />
        </div>
      </section>
      <br></br>
      <section className="background-section4" >
       
    
        <div>
          <Counter />
         
          <MockApi />
          
           <Form />
            </div>

       
      </section>
      <section>
        <div>
          <NASAAPOD />
        </div>
      </section>
      <div>
        <h1 className='heading'>Paginated Data</h1>
        <div className='page1'>
          <Pagination data={data} itemsPerPage={itemsPerPage} />
        </div>
      </div>
    </>
  );
}

export default App;

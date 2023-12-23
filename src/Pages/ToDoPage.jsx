import React, { useState } from 'react';
import Button from '../components/Button';

const ToDoPage = () => {
  const [task, setTask] = useState('');
  const [addLists, setAddLists] = useState([
    'sleep',
    'coding',
    'everything'
  ]);

  function handleAddTodo() {
    setAddLists(oldToDos => [...oldToDos, task]);
    setTask(''); // Clear the input field after adding a task
  }

  function handleDelete(index) {
    setAddLists(oldToDos => oldToDos.filter((_, i) => i !== index));
  }

  function handleEdit(index, updatedTask) {
    setAddLists(oldToDos => {
      const updatedList = [...oldToDos];
      updatedList[index] = updatedTask;
      return updatedList;
    });
  }

  return (
    <section className=''>
      <main className=''>
        <h1 className='text-2xl text-center mt-5 py-7'>Best To Do App Ever</h1>
        <div className='flex my-4'>
          <input
            className='shadow-md border'
            type="text"
            name="todo"
            id="todo"
            value={task}
            onChange={e => {
              setTask(e.target.value);
            }}
          />
          <Button name='Add' onClick={handleAddTodo} />
        </div>

        <ol>
          {addLists.map((addList, index) => (
            <li key={index} className='text-xl py-1 mx-2'>
              {addList}
              <Button name='Delete' onClick={() => handleDelete(index)} />
              <Button
                name='Edit'
                onClick={() => {
                  const updatedTask = prompt('Edit task:', addList);
                  if (updatedTask !== null) {
                    handleEdit(index, updatedTask);
                  }
                }}
              />
            </li>
          ))}
        </ol>
      </main>
    </section>
  );
};

export default ToDoPage;

import React from 'react'
import Button from '../components/Button'
import { useState } from "react";


const ToDoPage = () => {
    const [addLists, setAddLists] = useState([
        'sleep',
        'coding',
        'everything'
    ])
  return (
    <section className=''>
        <main className=''>
            <h1 className='text-2xl text-center mt-5 py-7'>Best To Do App Ever</h1>
            <div className='flex my-4'>
                <input className='shadow-md border' type="text" name="todo" id="todo" />
                <Button name='Submit' />
            </div>
            
            <ol>
               {addLists.map(addList => {
                return (
                    <li className='text-xl py-1 mx-2'> {addList} </li>
                )
               })}
            </ol>

            
        </main>
    </section>
  )
}

export default ToDoPage 
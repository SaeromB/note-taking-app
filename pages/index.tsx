import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { PrimaryButton } from '../src/components/button'
import Card from '../src/components/card'
import CreateNoteModal from '../src/components/create-note'
import ManageNote from '../src/components/manage-note'

import React, { useState } from 'react'
import CardItem from '../src/components/card-item'

const notes: Note[] = [
  {
    title: 'Walk the dog',
    content: 'Walk the dog',
    complete: false,
  },
  {
    title: 'Write app',
    content: 'Write app',
    complete: true,
  },
]

const Home = () => {
  return (
    <>
      <div className="p-4">
        <div className="flex justify-between">
          <h1 className="font-semibold	leading-7	text-xl">Note Taking</h1>
          {/* <button onClick={() => setShow(true)}>Create</button> */}
        </div>
        {/* <button onClick={() => setManage(true)}>Manage</button>
        <ManageNote manage={manage} setManage={setManage} /> */}
        <div className="grid grid-cols-2 mt-4 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
          {/* <Card /> */}
          <CardItem note={notes[0]} />
          <CardItem note={notes[1]} />
        </div>
        {/* <CreateNoteModal show={show} setShow={setShow}></CreateNoteModal> */}
      </div>

      {/* <AddTodoForm /> */}
    </>
    // <ul>
    //   <TodoList todos={todos} toggleTodo={toggleTodo} />
    //   <AddTodoForm addTodo={addTodo} />
    // </ul>
  )
}

export default Home

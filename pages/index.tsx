import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { PrimaryButton, SecondayButton } from '../src/components/button'
import Card from '../src/components/card'
import CreateNoteModal from '../src/components/create-note'
import ManageNote from '../src/components/manage-note'

import React, { useState } from 'react'
import CardItem from '../src/components/card-item/CardItem'
import CardList from '../src/components/card-list'

const initialNotes: Note[] = [
  {
    title: 'Walk the dog',
    content: 'Walk the dog',
    complete: false,
    archived: false,
  },
  {
    title: 'Write app',
    content: 'Write app',
    complete: true,
    archived: true,
  },
]

const Home = () => {
  const [notes, setNotes] = useState(initialNotes)
  const [show, setShow] = useState(false)

  const [selectedFilter, setSelectedFilter] = useState('notes')
  const [list, setList] = useState(initialNotes)

  // const deleteNote = (selectedNote: Note, title: string) => {
  //   const newNotes = notes.filter((note) => note.title !== title)
  //   setList(newNotes)
  // }

  const toggleNote = (selectedNote: Note) => {
    const newNotes = notes.map((note) => {
      if (note === selectedNote) {
        return {
          ...note,
          complete: !note.complete,
        }
      }
      return note
    })
    setNotes(newNotes)
  }

  const addNote: AddNote = (title: string, content: string) => {
    const newNote = { title, content, complete: false, archived: false }
    setNotes([...notes, newNote])
  }

  const deleteNote: DeleteNote = (title: string, content: string) => {
    const newNotes = notes.filter((note) => note.title !== title)
    setNotes(newNotes)
  }

  // const deleteNote: DeleteNote = (title: string, content: string) => {
  //   const newNotes = notes.filter((note) => note.title !== title)
  //   setNotes(newNotes)
  // }

  const filteredNotes = notes.filter((note) => {
    if (selectedFilter === 'notes') {
      if (note.archived === false) {
        return true
      } else {
        return false
      }
    } else {
      if (note.archived === true) {
        return true
      } else {
        return false
      }
    }
  })

  return (
    <>
      <div className="p-4">
        <div className="flex justify-between">
          <h1 className="font-semibold	leading-7	text-xl">Note Taking</h1>
          <PrimaryButton onClick={() => setShow(true)}>Create</PrimaryButton>
        </div>
        <button onClick={() => setSelectedFilter('notes')}>Notes</button>
        <button onClick={() => setSelectedFilter('archived')}>Archived</button>
        {/* <button onClick={() => setManage(true)}>Manage</button>
        <ManageNote manage={manage} setManage={setManage} /> */}
        <div className="grid grid-cols-2 mt-4 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
          <CardList notes={filteredNotes} toggleNote={toggleNote}>
            <button>Delete</button>
          </CardList>
        </div>

        <CreateNoteModal
          addNote={addNote}
          show={show}
          setShow={setShow}
          note={{
            title: '',
            content: '',
            complete: false,
            archived: false,
          }}
          closeNote={function (selectedNote: Note): void {
            throw new Error('Function not implemented.')
          }}
          onClick={function (): void {
            throw new Error('Function not implemented.')
          }}
        />
      </div>
    </>
  )
}

export default Home

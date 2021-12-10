import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '../src/components/button'
import Card from '../src/components/card'
import CreateNoteModal from '../src/components/create-note'
import ManageNote from '../src/components/manage-note'

import React, { useState } from 'react'

const Home = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <div className="p-4">
        <div className="flex justify-between">
          <h1 className="font-semibold	leading-7	text-xl">Note Taking</h1>
          <button onClick={() => setShow(true)}>Create</button>
          {/* <CreateNoteModal show={show} setShow={setShow}>
            This is inside the modal!
          </CreateNoteModal> */}
          {/* <button onClick={() => setShow(true)}>Create</button>
          <CreateNoteModal>Hello</CreateNoteModal> */}
        </div>
        <ManageNote />
        <div className="grid grid-cols-2 mt-4 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <CreateNoteModal show={show} setShow={setShow}></CreateNoteModal>
      </div>
    </>
  )
}

export default Home

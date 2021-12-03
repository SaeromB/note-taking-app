import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '../src/components/button'
import Card from '../src/components/card'
import CreateNote from '../src/components/create-note'
import { useState } from 'react'

const Home = () => {
  const [showCreateModal, setCreateModal] = useState(false)
  const onClick = () => setCreateModal(true)

  return (
    <>
      {showCreateModal ? <CreateNote /> : null}
      <div className="p-4">
        <div className="flex justify-between">
          <h1 className="font-semibold	leading-7	text-xl">Note Taking</h1>
          <button onClick={onClick}>Create</button>
        </div>
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
      </div>
    </>
  )
}

export default Home

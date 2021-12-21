import React, { FC } from 'react'
import CardItem from '../card-item'

interface Props {
  notes: Note[]
  toggleNote: ToggleNote
}

const CardList: FC<Props> = ({ notes, toggleNote }) => {
  return (
    <>
      {notes.map((note) => (
        <CardItem key={note.title} note={note} toggleNote={toggleNote} />
      ))}
    </>
  )
}

export default CardList

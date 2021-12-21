import React, { FC, useState } from 'react'
import ManageNote from '../manage-note'

interface Props {
  note: Note
  toggleNote: ToggleNote
}
const CardItem: FC<Props> = ({ note, toggleNote }) => {
  const [modal, setModal] = useState(false)
  return (
    <>
      <div onClick={() => setModal(true)} className="aspect-w-1 aspect-h-1 text-left">
        <button className="border border-gray-300 border-opacity-100 bg-white rounded-lg shadow-sm p-4">
          <div className="mt-2 h-full text-left">
            {note.complete ? <p>Deleted</p> : null}
            <div>
              <input
                type="checkbox"
                checked={note.complete}
                readOnly
                onClick={() => {
                  toggleNote(note)
                }}
              />
              <p className="text-gray-900 leading-2 text-lg font-medium line-clamp-2 max-h-14 m-0">
                {note.title}
              </p>
            </div>
            <div className="mt-2">
              <p className="text-gray-500 leading-5 text-sm text-left m-0 line-clamp-5">
                {note.content}
              </p>
            </div>
          </div>
        </button>
      </div>

      <ManageNote modal={modal} setModal={setModal} note={note} />
    </>
  )
}

export default CardItem

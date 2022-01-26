import { notDeepStrictEqual, notEqual, notStrictEqual } from 'assert'
import React, { FC, useState } from 'react'
import Close from '../../../public/images/close'
import { SecondayButton, PrimaryButton } from '../button'
import { Primary } from '../card/index.stories'

type Props = {
  closeable?: boolean
  show?: any
  setShow?: any
  note: Note
  closeNote: CloseNote
  addNote: AddNote

  onClick: () => void
}

const CreateNoteModal: FC<Props> = ({ addNote, show, setShow }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  return (
    show && (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center bg-gray-500 bg-opacity-75 ">
          {/* Modal Content */}
          <div className="block w-full align-bottom bg-white p-6 rounded-md">
            {/* Modal Head */}
            <form>
              <div className="flex items-center justify-between">
                <h3 className="text-lg">Create Note</h3>
                <button onClick={() => setShow(false)}>
                  <Close />
                </button>
              </div>
              <div className="mt-6 text-left">
                <label className="">Title</label>
              </div>
              <div className="mt-1">
                <input
                  className="w-full border border-gray-300 rounded-md"
                  type="text"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value)
                  }}
                />
              </div>
              <div className="mt-6 text-left">
                <label className="">Content</label>
              </div>

              <div className="mt-1">
                <textarea
                  className="w-full border border-gray-300 rounded-md"
                  rows={5}
                  value={content}
                  onChange={(e) => {
                    setContent(e.target.value)
                  }}
                />
              </div>
              <div className="flex justify-end">
                <div className="mr-3">
                  <SecondayButton>Cancel</SecondayButton>
                </div>
                <PrimaryButton
                  onClick={(e) => {
                    e.preventDefault()
                    addNote(title, content)
                    setTitle('')
                    setContent('')
                    setShow(false)
                  }}
                >
                  Create
                </PrimaryButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  )
}

export default CreateNoteModal

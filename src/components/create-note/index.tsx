import React, { FC } from 'react'
import { SecondayButton, PrimaryButton } from '../button'
import { Primary } from '../card/index.stories'

type CreateModalProps = {
  closeable?: boolean
  show?: any
  setShow?: any
  note: Note
  closeNote: CloseNote
}

const CreateNoteModal: FC<CreateModalProps> = ({ children, show, setShow, note, closeNote }) => {
  return (
    show && (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center bg-gray-500 bg-opacity-75 ">
          {/* Modal Content*/}
          <div className="block w-full align-bottom bg-white p-6 rounded-md">
            {/* Modal Head */}
            <form>
              <div className="flex items-center justify-between">
                <h3 className="text-lg">Create Note</h3>
                <button onClick={() => setShow(false)}>X</button>
              </div>

              <div className="mt-6 text-left">
                <label className="">Title</label>
              </div>
              <div className="mt-1">
                <input type="text" className="w-full border border-gray-300 rounded-md"></input>
              </div>

              <div className="mt-6 text-left">
                <label className="">Content</label>
              </div>
              <div className="mt-1">
                <textarea className="w-full border border-gray-300 rounded-md"></textarea>
              </div>

              <div className="flex justify-end">
                <SecondayButton>Cancel</SecondayButton>
                <div className="ml-3">
                  <PrimaryButton>Create</PrimaryButton>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  )
}

export default CreateNoteModal

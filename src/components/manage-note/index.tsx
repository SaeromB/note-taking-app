import React, { FC } from 'react'
import Ellipsis from '../../../public/images/ ellipsis'
import Close from '../../../public/images/close'
import { PrimaryButton, SecondayButton } from '../button'

type Props = {
  closeable?: boolean
  modal?: any
  setModal?: any
  note: Note
}

const ManageNote: FC<Props> = ({ note, modal, setModal }) => {
  return (
    modal && (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center bg-gray-500 bg-opacity-75 ">
          {/* Modal Content*/}
          <div className="block w-full align-bottom bg-white p-6 rounded-md">
            {/* Modal Head */}
            <form>
              <div className="flex items-center justify-end">
                <button onClick={() => console.log('This is working')}>
                  <Ellipsis />
                </button>
                <div className="ml-3">
                  <button onClick={() => setModal(false)}>
                    <Close />
                  </button>
                </div>
              </div>

              <div className="mt-6 text-left">
                <label className="">Title</label>
              </div>
              <div className="mt-1">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md"
                  defaultValue={note.title}
                />
              </div>

              <div className="mt-6 text-left">
                <label className="">Content</label>
              </div>
              <div className="mt-1">
                <textarea
                  name="content"
                  defaultValue={note.content}
                  className="w-full border border-gray-300 rounded-md"
                />
              </div>

              <div className="flex justify-end">
                <SecondayButton>Cancel</SecondayButton>
                <div className="ml-3">
                  <PrimaryButton>Save</PrimaryButton>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  )
}

export default ManageNote

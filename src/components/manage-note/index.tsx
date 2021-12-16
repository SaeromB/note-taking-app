import React, { FC } from 'react'
import Ellipsis from '../../../public/images/ ellipsis'
import Close from '../../../public/images/close'
import { PrimaryButton, SecondayButton } from '../button'

type ManageModalProps = {
  closeable?: boolean
  manage?: any
  setManage?: any
}

const ManageNote: FC<ManageModalProps> = ({ children, manage, setManage }) => {
  return (
    manage && (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center bg-gray-500 bg-opacity-75 ">
          {/* Modal Content*/}
          <div className="block w-full align-bottom bg-white p-6 rounded-md">
            {/* Modal Head */}
            <form>
              <div className="flex items-center justify-end">
                <button>
                  <Ellipsis />
                </button>
                <button onClick={() => setManage(false)}>
                  <Close />
                </button>
              </div>

              <div className="mt-6 text-left">
                <label className="">Title</label>
              </div>
              <div className="mt-1">
                <input className="w-full border border-gray-300 rounded-md"></input>
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

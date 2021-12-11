import React, { FC } from 'react'

type ManageModalProps = {
  closeable?: boolean
  manage?: any
  setManage?: any
}

const ManageNote: FC<ManageModalProps> = ({ children, manage, setManage }) => {
  return (
    manage && (
      <div>
        <button>Simple Modal</button>

        <div className="hidden overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center">
          <div className="relative w-full max-w-2xl px-4 h-full md:h-auto">
            <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
              <h3>Hello</h3>
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default ManageNote

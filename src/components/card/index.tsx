import React, { useState } from 'react'
import ManageNote from '../manage-note'

const Card = () => {
  const [manage, setManage] = useState(false)

  return (
    <>
      <div onClick={() => setManage(true)} className="aspect-w-1 aspect-h-1 text-left">
        <button className="border border-gray-300 border-opacity-100 bg-white rounded-lg shadow-sm p-4">
          <div className="mt-2 h-full text-left">
            <div>
              <p className="text-gray-900 leading-2 text-lg font-medium line-clamp-2 max-h-14 m-0">
                Note Title
              </p>
            </div>
            <div className="mt-2">
              <p className="text-gray-500 leading-5 text-sm text-left m-0 line-clamp-5">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </button>
      </div>

      <ManageNote manage={manage} setManage={setManage} />
    </>
  )
}

export default Card

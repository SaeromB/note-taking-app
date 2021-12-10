import React, { FC } from 'react'

type CreateModalProps = {
  closeable?: boolean
  show?: any
  setShow?: any
}

// const CreateNoteModal: FC<CreateModalProps> = ({ children, show, setShow }) => {
//   return (
//     show && (
//       <div className="fixed z-10 inset-0 overflow-y-auto bg-gray-500 opacity-75">
//         <div className="bg-white m-4 p-6 rounded-lg">
//           <div className="flex items-center justify-between">
//             <div className="text-lg">Create Note</div>
//             <button onClick={() => setShow(false)}>X</button>
//           </div>
//           <div className="mt-6">
//             <div>Title</div>
//             <input />
//           </div>
//         </div>
//       </div>
//     )
//   )
// }

const CreateNoteModal: FC<CreateModalProps> = ({ children, show, setShow }) => {
  return (
    show && (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
            <div className="inline-block w-full align-bottom bg-white rounded-md text-gray-500">
              <div className="flex items-center justify-between">
                <div className="text-lg">Create Note</div>
                <button onClick={() => setShow(false)}>X</button>
              </div>
              <div>
                <div className="text-left">Title</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default CreateNoteModal

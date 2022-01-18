import React, { FC } from 'react'

interface SecondaryButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const SecondaryButton: FC<SecondaryButtonProps> = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="border border-gray-300 bg-opacity-100 rounded-md">
      <div className="text-gray-700 text-sm leading-5 py-2 px-4">{children}</div>
    </button>
  )
}

export default SecondaryButton

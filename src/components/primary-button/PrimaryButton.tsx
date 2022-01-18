import React, { FC } from 'react'

interface PrimaryButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ onClick, children }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="border border-gray-600 bg-gray-600 bg-opacity-100 rounded-md"
    >
      <div className="text-white text-sm leading-5 py-2 px-4">{children}</div>
    </button>
  )
}

export default PrimaryButton

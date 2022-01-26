import React, { FC } from 'react'

interface PrimaryButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

// TODO: 버튼 호버 이펙트 추가하기
const PrimaryButton: FC<PrimaryButtonProps> = ({ onClick, children }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="border border-gray-600 bg-gray-600 bg-opacity-100 rounded-md"
    >
      <div className="text-white text-sm font-medium leading-5 py-2 px-4">{children}</div>
    </button>
  )
}

export default PrimaryButton

import React, { FC } from 'react'

interface SecondaryButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

// TODO: 버튼 호버 이펙트 추가하기
const SecondaryButton: FC<SecondaryButtonProps> = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="border border-gray-300 bg-opacity-100 rounded-md">
      <div className="text-gray-700 text-sm font-medium leading-5 py-2 px-4">{children}</div>
    </button>
  )
}

export default SecondaryButton

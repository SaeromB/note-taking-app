import React, { FC } from 'react'

// TODO: 적합한 위치로 옮겨두기
// interface Note {
//   id: string
//   title: string
//   content: string
//   archived: boolean
// }

interface CardItemProps {
  title: string
  content: string
  onClick: React.MouseEventHandler<HTMLDivElement>
}

// TODO: 호버 시 보더 색상이 변해야함
const CardItem: FC<CardItemProps> = ({ title, content, onClick }) => {
  return (
    <>
      <div onClick={onClick} className="aspect-w-1 aspect-h-1 text-left cursor-pointer">
        <div className="border border-gray-300 border-opacity-100 bg-white rounded-lg shadow-sm p-4">
          <div className="h-full text-left">
            <div>
              <p className="text-gray-900 leading-2 text-lg font-medium line-clamp-2 max-h-14 m-0">
                {title}
              </p>
            </div>
            <div className="mt-2">
              <p className="text-gray-500 leading-5 text-sm text-left m-0 line-clamp-5">
                {content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardItem

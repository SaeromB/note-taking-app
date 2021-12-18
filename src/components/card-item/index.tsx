import React, { FC } from 'react'

interface Props {
  note: Note
}
const CardItem: FC<Props> = ({ note }) => {
  return (
    <div className="mt-2 h-full text-left">
      <div>
        {/* 나중에 button 의 역활을 샘플로 만들기 */}
        <input checked={note.complete} />
        <p className="text-gray-900 leading-2 text-lg font-medium line-clamp-2 max-h-14 m-0">
          {note.title}
        </p>
      </div>
      <div className="mt-2">
        <p className="text-gray-500 leading-5 text-sm text-left m-0 line-clamp-5">{note.content}</p>
      </div>
    </div>
  )
}

export default CardItem

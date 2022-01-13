import React, { FC } from 'react'

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'archived' | 'card'
}

type Props = {
  children: any
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

// const Button: FC<ButtonProps> = ({ variant = 'card', ...rest }) => {
//   if (variant === 'card') {
//     return <button>Card Button</button>
//   }

//   if (variant === 'archived') {
//     return <button>Archived Button</button>
//   }
// }

const PrimaryButton: FC<Props> = ({ children, onClick }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="border border-gray-600 bg-gray-600 bg-opacity-100 rounded-md"
    >
      <div className="text-white text-xs leading-5 py-2 px-4">{children}</div>
    </button>
  )
}

const SecondayButton: FC<Props> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="border border-gray-300 bg-opacity-100 rounded-md">
      <div className="text-gray-700 text-xs leading-5 py-2 px-4">{children}</div>
    </button>
  )
}

const CardButton = () => {
  return <div></div>
}

export { PrimaryButton, SecondayButton, CardButton }

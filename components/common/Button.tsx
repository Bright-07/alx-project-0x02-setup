import { ButtonProps } from '../../interfaces'
import clsx from 'clsx'

export default function Button({ size, shape, label }: ButtonProps) {
  const sizeClass = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  }[size]

  return (
    <button
      className={clsx(
        'bg-blue-600 text-white hover:bg-blue-700 transition',
        sizeClass,
        shape
      )}
    >
      {label}
    </button>
  )
}

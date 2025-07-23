import { CardProps } from '../../interfaces'

export default function Card({ title, content }: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 border border-gray-200 w-full max-w-md">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  )
}

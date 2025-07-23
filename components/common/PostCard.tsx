import { PostProps } from '../../interfaces'

export default function PostCard({ title, content, userId }: PostProps) {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 w-full max-w-xl">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">{content}</p>
      <p className="text-sm text-gray-500">Posted by user #{userId}</p>
    </div>
  )
}

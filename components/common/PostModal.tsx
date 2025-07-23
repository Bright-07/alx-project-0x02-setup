import { useState } from 'react'

interface PostModalProps {
  onClose: () => void
  onSave: (title: string, content: string) => void
}

export default function PostModal({ onClose, onSave }: PostModalProps) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title && content) {
      onSave(title, content)
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add New Post</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Title"
            className="border p-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Content"
            className="border p-2 rounded"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="flex justify-between">
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Save
            </button>
            <button type="button" onClick={onClose} className="text-red-500 hover:underline">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

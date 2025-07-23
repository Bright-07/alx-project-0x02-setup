import { useState } from 'react'
import Header from '../components/layout/Header'
import Card from '../components/common/Card'
import PostModal from '../components/common/PostModal'

interface Post {
  title: string
  content: string
}

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [showModal, setShowModal] = useState(false)

  const handleAddPost = (title: string, content: string) => {
    setPosts([{ title, content }, ...posts])
  }

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-start min-h-screen p-4 gap-4">
        <button
          onClick={() => setShowModal(true)}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          + Add Post
        </button>

        {showModal && (
          <PostModal onClose={() => setShowModal(false)} onSave={handleAddPost} />
        )}

        {posts.length > 0 ? (
          posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))
        ) : (
          <p className="text-gray-500 mt-8">No posts yet. Click the button to add one.</p>
        )}
      </main>
    </>
  )
}

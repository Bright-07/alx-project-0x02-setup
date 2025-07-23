import { useEffect, useState } from 'react'
import Header from '../components/layout/Header'
import PostCard from '../components/common/PostCard'
import { PostProps } from '../interfaces'

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((post: any) => ({
          title: post.title,
          content: post.body,
          userId: post.userId
        }))
        setPosts(formatted)
      })
  }, [])

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-start min-h-screen gap-4 p-4">
        <h1 className="text-3xl font-bold">Posts</h1>
        {posts.length === 0 ? (
          <p className="text-gray-500">Loading posts...</p>
        ) : (
          posts.map((post, index) => (
            <PostCard
              key={index}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))
        )}
      </main>
    </>
  )
}

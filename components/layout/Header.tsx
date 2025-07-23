import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4">
      <nav className="flex gap-6">
        <Link href="/home" className="hover:text-yellow-400">Home</Link>
        <Link href="/about" className="hover:text-yellow-400">About</Link>
        <Link href="/posts" className="hover:text-yellow-400">Posts</Link>
        <Link href="/users" className="hover:text-yellow-400">Users</Link>
      </nav>
    </header>
  )
}

import { useEffect, useState } from 'react'
import Header from '../components/layout/Header'
import UserCard from '../components/common/UserCard'
import { UserProps } from '../interfaces'

export default function UsersPage() {
  const [users, setUsers] = useState<UserProps[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((user: any) => ({
          name: user.name,
          email: user.email,
          address: {
            street: user.address.street,
            city: user.address.city,
          },
        }))
        setUsers(formatted)
      })
  }, [])

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-start min-h-screen gap-4 p-4">
        <h1 className="text-3xl font-bold">Users</h1>
        {users.length === 0 ? (
          <p className="text-gray-500">Loading users...</p>
        ) : (
          users.map((user, index) => <UserCard key={index} {...user} />)
        )}
      </main>
    </>
  )
}

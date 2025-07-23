import { UserProps } from '../../interfaces'

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="bg-white shadow-md rounded-lg border border-gray-200 p-4 w-full max-w-xl">
      <h2 className="text-xl font-bold mb-1">{name}</h2>
      <p className="text-gray-700 mb-1">{email}</p>
      <p className="text-sm text-gray-500">
        {address.street}, {address.city}
      </p>
    </div>
  )
}

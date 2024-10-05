import { Users } from '@/lib/dto'
import { UserAccount } from './UserAccount'

export function Dashboard({ users }: { users: Users[] }) {
  return (
    <div className="grid gap-5 rounded-md border border-zinc-800 bg-primary bg-opacity-50 p-4 shadow md:grid-cols-2 md:p-12">
      {users.map((user) => (
        <UserAccount key={user.id} users={user} />
      ))}
    </div>
  )
}

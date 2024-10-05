import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Users } from '@/lib/dto'

export function UserAccount({ users: user }: { users: Users }) {
  const formatBRL = (value: number) =>
    new Intl.NumberFormat('pt-br', {
      currency: 'BRL',
      style: 'currency',
    }).format(value)

  return (
    <div className="flex items-center space-x-3 rounded-md border bg-white p-4 shadow">
      <Avatar className="h-14 w-14 ring-1 ring-zinc-300">
        <AvatarImage
          src={user.avatar_url}
          alt={`Imagem de ${user.name}`}
          className="object-cover"
        />
        <AvatarFallback>{user.name.toUpperCase().slice(0, 2)}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <h1 className="font-semibold">{user.name}</h1>
        <h2>{formatBRL(user.balance)}</h2>
      </div>
    </div>
  )
}

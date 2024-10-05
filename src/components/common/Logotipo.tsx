import Image from 'next/image'

export function Logotipo() {
  return (
    <div className="flex items-center space-x-5">
      <Image
        src="/logo.svg"
        height={80}
        width={80}
        alt="Logotipo TransfereAí"
      />
      <span className="text-4xl font-medium text-primary">
        Transfere<span className="text-secondary">Aí</span>!
      </span>
    </div>
  )
}

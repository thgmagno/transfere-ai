import Image from 'next/image'

export function Logotipo() {
  return (
    <div className="flex items-center space-x-2.5">
      <Image
        src="/logo.svg"
        height={80}
        width={80}
        alt="Logotipo TransfereAí"
      />
      <span className="text-3xl font-medium text-primary md:text-4xl">
        Transfere<span className="text-secondary">Aí</span>!
      </span>
    </div>
  )
}

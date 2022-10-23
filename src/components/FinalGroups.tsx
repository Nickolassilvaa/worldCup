import { X } from 'phosphor-react'

export function FinalGroups() {
  return (
    <div>
      <p className="text-center font-bold text-2xl mb-2">Finalistas</p>
      <div className="border-b-2 p-4">
        <ul className="h-full w-full flex items-center justify-center gap-4 text-xl">
          <li>Finalista 1</li>
          <li>
            <X size={22} />
          </li>
          <li>Finalista 2</li>
        </ul>
      </div>
    </div>
  )
}

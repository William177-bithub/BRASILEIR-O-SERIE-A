export function LegendaZonas() {
  return (
    <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-xs text-gray-600">
      <li className="flex items-center gap-1.5">
        <span className="h-3 w-3 rounded-sm bg-green-600" /> Libertadores
      </li>
      <li className="flex items-center gap-1.5">
        <span className="h-3 w-3 rounded-sm bg-blue-600" /> Sul-Americana
      </li>
      <li className="flex items-center gap-1.5">
        <span className="h-3 w-3 rounded-sm bg-red-600" /> Rebaixamento
      </li>
    </ul>
  )
}
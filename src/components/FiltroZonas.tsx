import type { FiltroZona } from '../types'

interface FiltroZonasProps {
  filtroAtivo: FiltroZona
  onMudarFiltro: (filtro: FiltroZona) => void
}

const opcoes: { valor: FiltroZona; texto: string }[] = [
  { valor: 'todos', texto: 'Todos' },
  { valor: 'libertadores', texto: 'Libertadores' },
  { valor: 'sul-americana', texto: 'Sul-Americana' },
  { valor: 'rebaixamento', texto: 'Rebaixamento' },
]

export function FiltroZonas({ filtroAtivo, onMudarFiltro }: FiltroZonasProps) {
  return (
    // Mobile: chips com rolagem horizontal. Tablet+: sem rolagem.
    <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 md:mx-0 md:px-0">
      {opcoes.map((opcao) => {
        const ativo = filtroAtivo === opcao.valor
        return (
          <button
            key={opcao.valor}
            type="button"
            onClick={() => onMudarFiltro(opcao.valor)}
            aria-pressed={ativo}
            className={`shrink-0 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              ativo
                ? 'border-gray-900 bg-gray-900 text-white'
                : 'border-gray-400 bg-white text-gray-800 hover:border-gray-900'
            }`}
          >
            {opcao.texto}
          </button>
        )
      })}
    </div>
  )
}

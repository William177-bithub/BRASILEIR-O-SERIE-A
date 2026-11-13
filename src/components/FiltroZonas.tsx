import type { FiltroZona } from '../types'

type FiltroZonasProps = {
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
    <div className="filtro">
      {opcoes.map((opcao) => {
        const ativo = filtroAtivo === opcao.valor
        return (
          <button
            key={opcao.valor}
            type="button"
            onClick={() => onMudarFiltro(opcao.valor)}
            aria-pressed={ativo}
            className={`filtro__botao${ativo ? ' filtro__botao--ativo' : ''}`}
          >
            {opcao.texto}
          </button>
        )
      })}
    </div>
  )
}

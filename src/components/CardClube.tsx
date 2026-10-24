import type { Clube, Zona } from '../types'
import { calcularPontos, zonaDoClube } from '../data/clubes'
import { Escudo } from './Escudo'

interface CardClubeProps {
  clube: Clube
  favorito: boolean
  onFavoritar: (id: number) => void
}

// Faixa lateral colorida = zona da tabela
const corDaZona: Record<Zona, string> = {
  libertadores: 'border-l-green-600',
  'sul-americana': 'border-l-blue-600',
  neutra: 'border-l-gray-300',
  rebaixamento: 'border-l-red-600',
}

export function CardClube({ clube, favorito, onFavoritar }: CardClubeProps) {
  const zona = zonaDoClube(clube.posicao)
  const pontos = calcularPontos(clube)
  const saldo = clube.saldoGols > 0 ? `+${clube.saldoGols}` : `${clube.saldoGols}`

  return (
    <article
      className={`relative flex items-center gap-3 rounded-lg border border-gray-300 border-l-[6px] bg-white px-4 py-3 shadow-sm transition-shadow hover:shadow-md ${corDaZona[zona]}`}
    >
      {/* 1. Posição */}
      <span className="w-6 text-center text-lg font-bold">{clube.posicao}</span>

      {/* 2. Escudo */}
      <Escudo sigla={clube.sigla} cor={clube.cor} />

      <div className="min-w-0 flex-1">
        {/* 3. Nome */}
        <h3 className="truncate font-bold">{clube.nome}</h3>
        {/* 4. Jogos, vitórias e saldo */}
        <p className="text-sm text-gray-500">
          J {clube.jogos} · V {clube.vitorias} · SG {saldo}
        </p>
      </div>

      {/* 5. Pontos (destaque) */}
      <div className="pr-5 text-center">
        <p className="text-2xl font-extrabold leading-none">{pontos}</p>
        <p className="text-xs text-gray-500">pts</p>
      </div>

      {/* 6. Estrela de favoritar */}
      <button
        type="button"
        onClick={() => onFavoritar(clube.id)}
        aria-label={favorito ? `Remover ${clube.nome} dos favoritos` : `Favoritar ${clube.nome}`}
        aria-pressed={favorito}
        className={`absolute right-2 top-1.5 text-lg leading-none transition-transform hover:scale-125 ${
          favorito ? 'text-yellow-500' : 'text-gray-400'
        }`}
      >
        {favorito ? '★' : '☆'}
      </button>
    </article>
  )
}

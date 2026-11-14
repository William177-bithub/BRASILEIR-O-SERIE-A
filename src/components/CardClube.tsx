import type { Clube } from '../types'
import { calcularPontos, zonaDoClube } from '../data/clubes'
import { Escudo } from './Escudo'

type CardClubeProps = {
  clube: Clube
  favorito: boolean
  onFavoritar: (id: number) => void
}

export function CardClube({ clube, favorito, onFavoritar }: CardClubeProps) {
  const zona = zonaDoClube(clube.posicao)
  const pontos = calcularPontos(clube)
  const saldo = clube.saldoGols > 0 ? `+${clube.saldoGols}` : `${clube.saldoGols}`

  return (
    // A faixa lateral colorida indica a zona da tabela
    <article className={`card-clube card-clube--${zona}`}>
      {/* 1. Posição */}
      <span className="card-clube__posicao">{clube.posicao}</span>

      {/* 2. Escudo */}
      <Escudo sigla={clube.sigla} cor={clube.cor} />

      <div className="card-clube__info">
        {/* 3. Nome */}
        <h3 className="card-clube__nome">{clube.nome}</h3>
        {/* 4. Jogos, vitórias e saldo */}
        <p className="card-clube__stats">
          J {clube.jogos} · V {clube.vitorias} · SG {saldo}
        </p>
      </div>

      {/* 5. Pontos (destaque) */}
      <div className="card-clube__pontos">
        <p className="card-clube__pontos-valor">{pontos}</p>
        <p className="card-clube__pontos-rotulo">pts</p>
      </div>

      {/* 6. Estrela de favoritar */}
      <button
        type="button"
        onClick={() => onFavoritar(clube.id)}
        aria-label={favorito ? `Remover ${clube.nome} dos favoritos` : `Favoritar ${clube.nome}`}
        aria-pressed={favorito}
        className={`card-clube__favorito${favorito ? ' card-clube__favorito--ativo' : ''}`}
      >
        {favorito ? '★' : '☆'}
      </button>
    </article>
  )
}

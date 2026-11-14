import type { Clube, Jogo } from '../types'
import { Escudo } from './Escudo'

type CardJogoProps = {
  jogo: Jogo
  mandante: Clube
  visitante: Clube
}

export function CardJogo({ jogo, mandante, visitante }: CardJogoProps) {
  return (
    <article className="card-jogo">
      {/* 1. Data e horário */}
      <p className="card-jogo__data">
        {jogo.data} · {jogo.horario}
      </p>

      <div className="card-jogo__confronto">
        {/* 2 e 3. Escudo e nome do mandante */}
        <div className="card-jogo__time">
          <Escudo sigla={mandante.sigla} cor={mandante.cor} tamanho="sm" />
          <span className="card-jogo__nome">{mandante.nome}</span>
        </div>

        {/* 4. 'x' ou placar */}
        <span className="card-jogo__placar">{jogo.placar ?? 'x'}</span>

        {/* 5 e 6. Escudo e nome do visitante */}
        <div className="card-jogo__time">
          <Escudo sigla={visitante.sigla} cor={visitante.cor} tamanho="sm" />
          <span className="card-jogo__nome">{visitante.nome}</span>
        </div>
      </div>

      {/* 7. Estádio e rodada */}
      <p className="card-jogo__local">
        {jogo.estadio} · Rodada {jogo.rodada}
      </p>
    </article>
  )
}

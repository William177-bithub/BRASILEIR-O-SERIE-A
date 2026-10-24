import type { Clube, Jogo } from '../types'
import { Escudo } from './Escudo'

interface CardJogoProps {
  jogo: Jogo
  mandante: Clube
  visitante: Clube
}

export function CardJogo({ jogo, mandante, visitante }: CardJogoProps) {
  return (
    <article className="rounded-lg border border-gray-300 bg-white px-4 py-3 shadow-sm">
      {/* 1. Data e horário */}
      <p className="text-center text-sm text-gray-500">
        {jogo.data} · {jogo.horario}
      </p>

      <div className="mt-2 grid grid-cols-[1fr_auto_1fr] items-center gap-2">
        {/* 2 e 3. Escudo e nome do mandante */}
        <div className="flex flex-col items-center gap-1">
          <Escudo sigla={mandante.sigla} cor={mandante.cor} tamanho="sm" />
          <span className="text-center font-bold">{mandante.nome}</span>
        </div>

        {/* 4. 'x' ou placar */}
        <span className="text-xl font-bold text-gray-700">{jogo.placar ?? 'x'}</span>

        {/* 5 e 6. Escudo e nome do visitante */}
        <div className="flex flex-col items-center gap-1">
          <Escudo sigla={visitante.sigla} cor={visitante.cor} tamanho="sm" />
          <span className="text-center font-bold">{visitante.nome}</span>
        </div>
      </div>

      {/* 7. Estádio e rodada */}
      <p className="mt-2 text-xs text-gray-500">
        {jogo.estadio} · Rodada {jogo.rodada}
      </p>
    </article>
  )
}

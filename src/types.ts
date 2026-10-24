export type Zona = 'libertadores' | 'sul-americana' | 'neutra' | 'rebaixamento'

export type FiltroZona = 'todos' | 'libertadores' | 'sul-americana' | 'rebaixamento'

export interface Clube {
  id: number
  posicao: number
  nome: string
  sigla: string
  cor: string
  jogos: number
  vitorias: number
  empates: number
  derrotas: number
  saldoGols: number
}

export interface Jogo {
  id: number
  data: string
  horario: string
  mandante: string
  visitante: string
  estadio: string
  rodada: number
  placar?: string
}

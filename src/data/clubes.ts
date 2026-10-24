import type { Clube, Zona } from '../types'

// Dados fictícios para fins acadêmicos (rodada 33 de 38).
export const clubes: Clube[] = [
  { id: 1, posicao: 1, nome: 'Flamengo', sigla: 'FLA', cor: '#c8102e', jogos: 32, vitorias: 20, empates: 6, derrotas: 6, saldoGols: 28 },
  { id: 2, posicao: 2, nome: 'Palmeiras', sigla: 'PAL', cor: '#006437', jogos: 32, vitorias: 19, empates: 6, derrotas: 7, saldoGols: 25 },
  { id: 3, posicao: 3, nome: 'Cruzeiro', sigla: 'CRU', cor: '#003da5', jogos: 32, vitorias: 18, empates: 6, derrotas: 8, saldoGols: 17 },
  { id: 4, posicao: 4, nome: 'Mirassol', sigla: 'MIR', cor: '#e5b800', jogos: 32, vitorias: 17, empates: 6, derrotas: 9, saldoGols: 12 },
  { id: 5, posicao: 5, nome: 'Bahia', sigla: 'BAH', cor: '#0057a8', jogos: 32, vitorias: 15, empates: 8, derrotas: 9, saldoGols: 9 },
  { id: 6, posicao: 6, nome: 'Fluminense', sigla: 'FLU', cor: '#870a28', jogos: 32, vitorias: 14, empates: 8, derrotas: 10, saldoGols: 6 },
  { id: 7, posicao: 7, nome: 'Botafogo', sigla: 'BOT', cor: '#222222', jogos: 32, vitorias: 13, empates: 8, derrotas: 11, saldoGols: 4 },
  { id: 8, posicao: 8, nome: 'São Paulo', sigla: 'SAO', cor: '#d71920', jogos: 32, vitorias: 12, empates: 8, derrotas: 12, saldoGols: 2 },
  { id: 9, posicao: 9, nome: 'Corinthians', sigla: 'COR', cor: '#333333', jogos: 32, vitorias: 11, empates: 10, derrotas: 11, saldoGols: 1 },
  { id: 10, posicao: 10, nome: 'Internacional', sigla: 'INT', cor: '#e30613', jogos: 32, vitorias: 11, empates: 9, derrotas: 12, saldoGols: -1 },
  { id: 11, posicao: 11, nome: 'Grêmio', sigla: 'GRE', cor: '#0d80bf', jogos: 32, vitorias: 11, empates: 8, derrotas: 13, saldoGols: -2 },
  { id: 12, posicao: 12, nome: 'Atlético-MG', sigla: 'CAM', cor: '#111111', jogos: 32, vitorias: 10, empates: 10, derrotas: 12, saldoGols: -3 },
  { id: 13, posicao: 13, nome: 'Vasco', sigla: 'VAS', cor: '#1a1a1a', jogos: 32, vitorias: 10, empates: 9, derrotas: 13, saldoGols: -5 },
  { id: 14, posicao: 14, nome: 'Bragantino', sigla: 'RBB', cor: '#d6001c', jogos: 32, vitorias: 10, empates: 8, derrotas: 14, saldoGols: -6 },
  { id: 15, posicao: 15, nome: 'Santos', sigla: 'SAN', cor: '#444444', jogos: 32, vitorias: 9, empates: 10, derrotas: 13, saldoGols: -7 },
  { id: 16, posicao: 16, nome: 'Athletico-PR', sigla: 'CAP', cor: '#c4161c', jogos: 32, vitorias: 9, empates: 9, derrotas: 14, saldoGols: -9 },
  { id: 17, posicao: 17, nome: 'Vitória', sigla: 'VIT', cor: '#d2232a', jogos: 32, vitorias: 8, empates: 10, derrotas: 14, saldoGols: -12 },
  { id: 18, posicao: 18, nome: 'Coritiba', sigla: 'CFC', cor: '#00543c', jogos: 32, vitorias: 8, empates: 8, derrotas: 16, saldoGols: -15 },
  { id: 19, posicao: 19, nome: 'Chapecoense', sigla: 'CHA', cor: '#00843d', jogos: 32, vitorias: 6, empates: 9, derrotas: 17, saldoGols: -20 },
  { id: 20, posicao: 20, nome: 'Remo', sigla: 'REM', cor: '#002b5c', jogos: 32, vitorias: 5, empates: 8, derrotas: 19, saldoGols: -24 },
]

export function calcularPontos(clube: Clube): number {
  return clube.vitorias * 3 + clube.empates
}

export function zonaDoClube(posicao: number): Zona {
  if (posicao <= 4) return 'libertadores'
  if (posicao <= 7) return 'sul-americana'
  if (posicao >= 17) return 'rebaixamento'
  return 'neutra'
}

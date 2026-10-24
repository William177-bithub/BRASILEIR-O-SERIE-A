import { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { FiltroZonas } from './components/FiltroZonas'
import { CardClube } from './components/CardClube'
import { CardJogo } from './components/CardJogo'
import { Footer } from './components/Footer'
import { clubes, zonaDoClube } from './data/clubes'
import { proximosJogos } from './data/jogos'
import type { FiltroZona } from './types'

function App() {
  const [filtro, setFiltro] = useState<FiltroZona>('todos')
  const [favoritos, setFavoritos] = useState<number[]>([1])

  function alternarFavorito(id: number) {
    setFavoritos((atuais) =>
      atuais.includes(id) ? atuais.filter((item) => item !== id) : [...atuais, id],
    )
  }

  const clubesFiltrados =
    filtro === 'todos'
      ? clubes
      : clubes.filter((clube) => zonaDoClube(clube.posicao) === filtro)

  function buscarClube(sigla: string) {
    return clubes.find((clube) => clube.sigla === sigla)!
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header totalFavoritos={favoritos.length} />
      <Hero />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 md:px-6 lg:grid lg:grid-cols-[1fr_380px] lg:gap-8 lg:py-8">
        {/* Listagem principal */}
        <section id="classificacao" className="scroll-mt-20">
          <FiltroZonas filtroAtivo={filtro} onMudarFiltro={setFiltro} />

          <div className="mt-4 flex items-end justify-between">
            <h2 className="text-2xl font-bold">Classificação</h2>
            <p className="text-sm text-gray-500">{clubesFiltrados.length} clubes</p>
          </div>

          <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
            {clubesFiltrados.map((clube) => (
              <CardClube
                key={clube.id}
                clube={clube}
                favorito={favoritos.includes(clube.id)}
                onFavoritar={alternarFavorito}
              />
            ))}
          </div>

          {/* Legenda das zonas */}
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
        </section>

        {/* Listagem secundária: abaixo da tabela no mobile/tablet, lateral fixa no desktop */}
        <aside id="proximos-jogos" className="mt-10 scroll-mt-20 lg:mt-0">
          <div className="lg:sticky lg:top-24">
            <h2 className="text-2xl font-bold">Próximos jogos</h2>
            <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-1">
              {proximosJogos.map((jogo) => (
                <CardJogo
                  key={jogo.id}
                  jogo={jogo}
                  mandante={buscarClube(jogo.mandante)}
                  visitante={buscarClube(jogo.visitante)}
                />
              ))}
            </div>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  )
}

export default App

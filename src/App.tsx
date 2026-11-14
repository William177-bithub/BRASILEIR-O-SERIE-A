import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { FiltroZonas } from './components/FiltroZonas'
import { CardClube } from './components/CardClube'
import { CardJogo } from './components/CardJogo'
import { LegendaZonas } from './components/LegendaZonas'
import { Footer } from './components/Footer'
import { clubes, zonaDoClube, buscarClubePorSigla } from './data/clubes'
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

  return (
    <div className="app">
      <Header totalFavoritos={favoritos.length} />
      <Hero />

      <main className="principal">
        {/* Listagem principal */}
        <section id="classificacao" className="secao">
          <FiltroZonas filtroAtivo={filtro} onMudarFiltro={setFiltro} />

          <div className="secao__cabecalho">
            <h2 className="titulo-secao">Classificação</h2>
            <p className="secao__contagem">{clubesFiltrados.length} clubes</p>
          </div>

          <div className="lista-clubes">
            {clubesFiltrados.map((clube) => (
              <CardClube
                key={clube.id}
                clube={clube}
                favorito={favoritos.includes(clube.id)}
                onFavoritar={alternarFavorito}
              />
            ))}
          </div>

          <LegendaZonas />
        </section>

        {/* Listagem secundária: abaixo da tabela no mobile/tablet, lateral fixa no desktop */}
        <aside id="proximos-jogos" className="proximos">
          <div className="proximos__conteudo">
            <h2 className="titulo-secao">Próximos jogos</h2>
            <div className="lista-jogos">
              {proximosJogos.map((jogo) => (
                <CardJogo
                  key={jogo.id}
                  jogo={jogo}
                  mandante={buscarClubePorSigla(jogo.mandante)}
                  visitante={buscarClubePorSigla(jogo.visitante)}
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

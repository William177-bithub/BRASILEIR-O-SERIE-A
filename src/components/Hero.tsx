const estatisticas = [
  { valor: '33/38', rotulo: 'Rodada' },
  { valor: '20', rotulo: 'Clubes' },
  { valor: '380', rotulo: 'Jogos' },
]

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div>
          <h1 className="hero__titulo">Brasileirão Série A 2026</h1>
          {/* Subtítulo no mobile */}
          <p className="hero__subtitulo-mobile">Rodada 33 · classificação atualizada</p>
          {/* Subtítulo no tablet e desktop */}
          <p className="hero__subtitulo">Classificação e próximos jogos da temporada</p>
        </div>

        {/* Selo da rodada: só no tablet */}
        <div className="hero__selo">
          <p className="hero__selo-titulo">Rodada 33/38</p>
          <p className="hero__selo-texto">atualizada</p>
        </div>

        {/* 3 estatísticas: só no desktop */}
        <div className="hero__estatisticas">
          {estatisticas.map((item) => (
            <div key={item.rotulo} className="hero__estatistica">
              <p className="hero__estatistica-valor">{item.valor}</p>
              <p className="hero__estatistica-rotulo">{item.rotulo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

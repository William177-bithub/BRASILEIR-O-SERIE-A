const estatisticas = [
  { valor: '33/38', rotulo: 'Rodada' },
  { valor: '20', rotulo: 'Clubes' },
  { valor: '380', rotulo: 'Jogos' },
]

export function Hero() {
  return (
    <section className="bg-linear-to-br from-green-800 via-green-700 to-emerald-600 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-10 text-center md:flex-row md:justify-between md:px-6 md:py-12 md:text-left lg:py-20">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
            Brasileirão Série A 2026
          </h1>
          {/* Subtítulo no mobile */}
          <p className="mt-2 text-green-100 md:hidden">
            Rodada 33 · classificação atualizada
          </p>
          {/* Subtítulo no tablet e desktop */}
          <p className="mt-3 hidden text-lg text-green-100 md:block">
            Classificação e próximos jogos da temporada
          </p>
        </div>

        {/* Selo da rodada: só no tablet */}
        <div className="hidden rounded-xl border border-white/40 bg-white/10 px-8 py-4 text-center md:block lg:hidden">
          <p className="text-xl font-bold">Rodada 33/38</p>
          <p className="text-sm text-green-100">atualizada</p>
        </div>

        {/* 3 estatísticas: só no desktop */}
        <div className="hidden gap-4 lg:flex">
          {estatisticas.map((item) => (
            <div
              key={item.rotulo}
              className="w-40 rounded-xl border border-white/40 bg-white/10 py-6 text-center"
            >
              <p className="text-3xl font-extrabold">{item.valor}</p>
              <p className="mt-1 text-sm text-green-100">{item.rotulo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

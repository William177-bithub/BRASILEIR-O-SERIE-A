import { useState } from 'react'

interface HeaderProps {
  totalFavoritos: number
}

const links = [
  { texto: 'Classificação', href: '#classificacao' },
  { texto: 'Próximos jogos', href: '#proximos-jogos' },
  { texto: 'Sobre', href: '#sobre' },
]

export function Header({ totalFavoritos }: HeaderProps) {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#" className="flex items-center gap-2 font-extrabold tracking-tight">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-700 text-sm text-white">
            BR
          </span>
          <span className="text-lg">Série A</span>
        </a>

        {/* Menu expandido: tablet e desktop */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Menu principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 transition-colors hover:text-green-700"
            >
              {link.texto}
            </a>
          ))}
          {/* Contador de favoritos: só no desktop */}
          <span className="hidden items-center gap-1 rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-800 lg:flex">
            Favoritos ★ {totalFavoritos}
          </span>
        </nav>

        {/* Botão hambúrguer: só no mobile */}
        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-gray-100 md:hidden"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
        >
          <span className={`h-0.5 w-6 bg-gray-900 transition-transform ${menuAberto ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-gray-900 transition-opacity ${menuAberto ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-gray-900 transition-transform ${menuAberto ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Menu recolhido aberto (mobile) */}
      {menuAberto && (
        <nav className="border-t border-gray-200 px-4 pb-4 md:hidden" aria-label="Menu mobile">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuAberto(false)}
              className="block border-b border-gray-100 py-3 text-gray-700"
            >
              {link.texto}
            </a>
          ))}
          <p className="pt-3 text-sm font-semibold text-yellow-700">
            Favoritos ★ {totalFavoritos}
          </p>
        </nav>
      )}
    </header>
  )
}

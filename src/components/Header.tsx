import { useState } from 'react'

type HeaderProps = {
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
    <header className="header">
      <div className="header__container">
        <a href="#" className="logo">
          <span className="logo__icone">BR</span>
          <span className="logo__texto">Série A</span>
        </a>

        {/* Menu expandido: tablet e desktop */}
        <nav className="menu" aria-label="Menu principal">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="menu__link">
              {link.texto}
            </a>
          ))}
          {/* Contador de favoritos: só no desktop */}
          <span className="menu__favoritos">Favoritos ★ {totalFavoritos}</span>
        </nav>

        {/* Botão hambúrguer: só no mobile */}
        <button
          type="button"
          className="hamburguer"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
        >
          <span className={`hamburguer__linha${menuAberto ? ' hamburguer__linha--topo-aberta' : ''}`} />
          <span className={`hamburguer__linha${menuAberto ? ' hamburguer__linha--meio-aberta' : ''}`} />
          <span className={`hamburguer__linha${menuAberto ? ' hamburguer__linha--base-aberta' : ''}`} />
        </button>
      </div>

      {/* Menu recolhido aberto (mobile) */}
      {menuAberto && (
        <nav className="menu-mobile" aria-label="Menu mobile">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuAberto(false)}
              className="menu-mobile__link"
            >
              {link.texto}
            </a>
          ))}
          <p className="menu-mobile__favoritos">Favoritos ★ {totalFavoritos}</p>
        </nav>
      )}
    </header>
  )
}

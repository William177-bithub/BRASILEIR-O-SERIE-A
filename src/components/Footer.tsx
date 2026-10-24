export function Footer() {
  return (
    <footer id="sobre" className="border-t border-gray-300 bg-gray-200">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 text-center md:grid-cols-2 md:px-6 md:text-left lg:grid-cols-3">
        <div>
          <h2 className="font-bold">Brasileirão Série A</h2>
          <p className="mt-1 text-sm text-gray-600">Projeto acadêmico · dados fictícios</p>
        </div>

        <div>
          <h2 className="font-bold">Navegação</h2>
          <ul className="mt-1 space-y-1 text-sm text-gray-600">
            <li>
              <a href="#classificacao" className="hover:text-green-700">Classificação</a>
            </li>
            <li>
              <a href="#proximos-jogos" className="hover:text-green-700">Próximos jogos</a>
            </li>
          </ul>
        </div>

        {/* No tablet a coluna de contato vai para baixo; no desktop vira a 3ª coluna */}
        <div className="md:col-span-2 lg:col-span-1">
          <h2 className="font-bold">Contato</h2>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-1 block text-sm text-gray-600 hover:text-green-700"
          >
            GitHub do projeto
          </a>
        </div>
      </div>
    </footer>
  )
}

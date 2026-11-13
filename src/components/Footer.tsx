export function Footer() {
  return (
    <footer id="sobre" className="rodape">
      <div className="rodape__container">
        <div>
          <h2 className="rodape__titulo">Brasileirão Série A</h2>
          <p className="rodape__texto">Projeto acadêmico · dados fictícios</p>
        </div>

        <div>
          <h2 className="rodape__titulo">Navegação</h2>
          <ul className="rodape__lista">
            <li>
              <a href="#classificacao">Classificação</a>
            </li>
            <li>
              <a href="#proximos-jogos">Próximos jogos</a>
            </li>
          </ul>
        </div>

        {/* No tablet a coluna de contato vai para baixo; no desktop vira a 3ª coluna */}
        <div className="rodape__contato">
          <h2 className="rodape__titulo">Contato</h2>
          <a
            href="https://github.com/William177-bithub/BRASILEIR-O-SERIE-A"
            target="_blank"
            rel="noreferrer"
            className="rodape__link"
          >
            GitHub do projeto
          </a>
        </div>
      </div>
    </footer>
  )
}

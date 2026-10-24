interface EscudoProps {
  sigla: string
  cor: string
  tamanho?: 'sm' | 'md'
}

// Escudo genérico em SVG (formato de brasão + sigla do clube).
export function Escudo({ sigla, cor, tamanho = 'md' }: EscudoProps) {
  const classeTamanho = tamanho === 'sm' ? 'h-9 w-9' : 'h-11 w-11'

  return (
    <svg
      viewBox="0 0 40 44"
      className={`${classeTamanho} shrink-0`}
      role="img"
      aria-label={`Escudo ${sigla}`}
    >
      <path
        d="M4 4h32v18c0 10-8 16-16 19C12 38 4 32 4 22V4z"
        fill={cor}
        stroke="#1f2937"
        strokeWidth="1.5"
      />
      <text
        x="20"
        y="24"
        textAnchor="middle"
        fontSize="9"
        fontWeight="700"
        fill="#ffffff"
        fontFamily="system-ui, sans-serif"
      >
        {sigla}
      </text>
    </svg>
  )
}

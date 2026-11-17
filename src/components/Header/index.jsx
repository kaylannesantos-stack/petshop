import './styles.css'

export default function Header({ theme, onToggleTheme }) {
  const themeLabel = theme === 'dark' ? 'Modo claro' : 'Modo escuro'

  return (
    <header className="header">
      <h1>Lambão PetShop</h1>
      <button
        className="theme-toggle"
        type="button"
        aria-label={`Ativar ${themeLabel.toLowerCase()}`}
        aria-pressed={theme === 'dark'}
        onClick={onToggleTheme}
      >
        <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
        <span>{themeLabel}</span>
      </button>
    </header>
  )
}

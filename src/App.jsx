import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/index.jsx'
import Footer from './components/Footer/index.jsx'
import Planos from './components/planos/index.jsx'
import Produtos from './components/Produtos/index.jsx'

const THEME_STORAGE_KEY = 'lambao-petshop-theme'

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  function handleToggleTheme() {
    setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
    <Header theme={theme} onToggleTheme={handleToggleTheme} />
    <main className="content">

      <section className="apresentacao">
        <h1>Bem-vindo ao Lambão Petshop</h1>
        <p>
          Tudo o que o seu melhor amigo precisa em um só lugar! Encontre as melhores
          rações, brinquedos e acessórios, além de atendimento veterinário e banho e
          tosa feitos com muito carinho.
        </p>
      </section>
  

      <h2 className="categoria">Categorias</h2>
      <div className="categorias">
        <article className="categoria-item">
          <img src="src/assets/cachorro.webp" alt="Cachorro" />
          <span>Cachorro</span>
          <p>Brinquedos, ração, produtos higiênicos e roupas</p>
        </article>
        <article className="categoria-item">
          <img src="src/assets/gato.webp" alt="Gato" />
          <span>Gato</span>
          <p>Areia higiênica, brinquedos e ração</p>
        </article>
        <article className="categoria-item">
          <img src="src/assets/passaro.webp" alt="Pássaro" />
          <span>Pássaro</span>
          <p>Gaiolas, alimentação, acessórios e brinquedos</p>
        </article>
        <article className="categoria-item">
          <img src="src/assets/outros.webp" alt="Outros animais" />
          <span>Outros</span>
          <p>Produtos especiais para todo tipo de pet</p>
        </article>
      </div>

      <Produtos/>

      <Planos/>


      <section className="sobre">
        <h2>Sobre Nós</h2>
        <p>No Lambão Petshop, sabemos que cada lambida é uma prova de amor — e retribuímos esse carinho com cuidado completo. Reunimos uma seleção especial de rações nutritivas, brinquedos e acessórios para o dia a dia do seu pet, somados a uma estrutura dedicada à saúde e estética animal, com clínica veterinária e banho e tosa realizados por profissionais apaixonados pelo que fazem.</p>
      </section>
      <Footer/>

    </main>
      
        
    </>
  )
}


export default App

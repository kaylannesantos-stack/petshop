import './styles.css';

import racaoCachorro from "./assets/racao_cachorro.jpeg";
import arranhador from "./assets/arranhador.jpeg";
import racaoMix from "./assets/racao_mix.jpeg";
import coleira from "./assets/coleira.webp";
import varinha from "./assets/varinha.jpeg";
import roda from "./assets/roda.webp";

// Lista (array) com os 6 produtos de exemplo
const listaProdutos = [
  {
    id: 1,
    nome: 'Ração Premium Cães Adultos 15kg',
    categoria: 'Cachorro',
    preco: 'R$ 189,90',
    imagem: racaoCachorro
  },
  {
    id: 2,
    nome: 'Arranhador Torre com Bolinha',
    categoria: 'Gato',
    preco: 'R$ 129,50',
    imagem: arranhador
  },
  {
    id: 3,
    nome: 'Ração Mix de Sementes Calopsita 500g',
    categoria: 'Pássaros',
    preco: 'R$ 24,90',
    imagem: racaoMix
  },
  {
    id: 4,
    nome: 'Coleira Peitoral Reforçada Azul',
    categoria: 'Cachorro',
    preco: 'R$ 59,90',
    imagem: coleira
  },
  {
    id: 5,
    nome: 'Varinha com Penas e Guizo',
    categoria: 'Gato',
    preco: 'R$ 19,90',
    imagem: varinha
  },
  {
    id: 6,
    nome: 'Rodinha de Exercícios Silenciosa',
    categoria: 'Outros',
    preco: 'R$ 45,00',
    imagem: roda
  }
];

export default function Produtos() {
  function handleComprar(nomeProduto) {
    alert(`Você adicionou "${nomeProduto}" ao carrinho do Lambão Petshop!`);
  }

  return (
    <section className="produtos-secao">
      <h2>Nossos Produtos em Destaque</h2>
      <p className="produtos-subtitulo">
        Confira nossa seleção de rações, brinquedos e acessórios
      </p>

      <div className="produtos-grid">
        {listaProdutos.map((produto) => (
          <div className="produto-card" key={produto.id}>
            <span className="produto-categoria">{produto.categoria}</span>
            <img src={produto.imagem} alt={produto.nome} />
            <h3>{produto.nome}</h3>
            <p className="produto-preco">{produto.preco}</p>
            <button
              className="produto-botao"
              onClick={() => handleComprar(produto.nome)}
            >
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

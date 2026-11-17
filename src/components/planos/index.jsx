import './styles.css';

export default function Planos() {
  return (
    <section className="planos-container">
      <div className="planos-cabecalho">
        <h2>Planos de Saúde Lambão Petshop</h2>
        <p>
          Cuidado preventivo, consultas e muito carinho para manter a saúde do
          seu melhor amigo sempre em dia, sem surpresas no orçamento.
        </p>
      </div>

      <div className="planos-lista">
        {/* Plano 1 */}
        <div className="plano-card">
          <h3>Lambão Essencial</h3>
          <p className="plano-subtitulo">Ideal para cuidados preventivos</p>
          <div className="plano-preco">
            <span>R$</span> 59,90 <small>/mês</small>
          </div>
          <ul className="plano-beneficios">
            <li>✔ Consultas em horário comercial</li>
            <li>✔ Vacinas anuais obrigatórias</li>
            <li>✔ Exames laboratoriais básicos</li>
            <li>✔ 10% de desconto em rações e brinquedos</li>
          </ul>
          <button className="plano-botao">Assinar Essencial</button>
        </div>

        {/* Plano 2 (Destaque) */}
        <div className="plano-card destaque">
          <span className="tag-popular">Mais Escolhido</span>
          <h3>Lambão Completo</h3>
          <p className="plano-subtitulo">Proteção total e estética inclusa</p>
          <div className="plano-preco">
            <span>R$</span> 99,90 <small>/mês</small>
          </div>
          <ul className="plano-beneficios">
            <li>✔ Consultas 24h e emergências</li>
            <li>✔ Todas as vacinas inclusas</li>
            <li>✔ Exames de imagem (Raio-X e Ultrassom)</li>
            <li>✔ 1 banho completo por mês incluso</li>
            <li>✔ 15% de desconto na loja física e online</li>
          </ul>
          <button className="plano-botao botao-destaque">Assinar Completo</button>
        </div>

        {/* Plano 3 */}
        <div className="plano-card">
          <h3>Lambão VIP</h3>
          <p className="plano-subtitulo">Cuidado máximo para o seu pet</p>
          <div className="plano-preco">
            <span>R$</span> 149,90 <small>/mês</small>
          </div>
          <ul className="plano-beneficios">
            <li>✔ Tudo do plano Completo</li>
            <li>✔ Castração e cirurgias simples</li>
            <li>✔ Limpeza de tártaro anual</li>
            <li>✔ 2 banhos e 1 tosa higiênica por mês</li>
            <li>✔ Atendimento domiciliar agendado</li>
          </ul>
          <button className="plano-botao">Assinar VIP</button>
        </div>
      </div>
    </section>
  );

} 
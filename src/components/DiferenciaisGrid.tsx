const DIFERENCIAIS = [
  { title: 'Cardápio', text: 'Cardápios personalizados, ajustados às preferências e necessidades de cada cliente, sempre com acompanhamento nutricional especializado.' },
  { title: 'Equipamento', text: 'Dispomos de equipamentos profissionais de alta qualidade para a produção das refeições.' },
  { title: 'Transporte em Hot Box', text: 'Garantimos que todas as refeições sejam transportadas em Hot Box, assegurando temperatura adequada e qualidade até o consumo.' },
  { title: 'Segurança Alimentar', text: 'Seguimos rigorosas boas práticas de higiene supervisionadas pela equipe nutricional.' },
  { title: 'Controle de Qualidade', text: 'Visitas quinzenais nas empresas para controle rigoroso de qualidade em todo o processo de entrega e consumo.' },
  { title: 'Refeições Especiais', text: 'Churrasco de inauguração de refeitório e preparação especial na sexta-feira do mês.' },
];

export default function DiferenciaisGrid() {
  return (
    <div className="diferenciais__grid">
      {DIFERENCIAIS.map((d, i) => (
        <div key={i} className="card-diferencial fade-in-up" style={{ transitionDelay: `${i * 100}ms` }}>
          <h3 className="card-diferencial__title">{d.title}</h3>
          <p className="card-diferencial__text">{d.text}</p>
        </div>
      ))}
    </div>
  );
}

const DIFERENCIAIS = [
  { title: 'Cardápio', text: 'Cardápios personalizados, ajustados às preferências e necessidades de cada cliente, sempre com acompanhamento nutricional especializado.' },
  { title: 'Equipamento', text: 'Dispomos de equipamentos profissionais de alta qualidade para a produção das refeições.' },
  { title: 'Transporte em Hot Box', text: 'Garantimos que todas as refeições sejam transportadas em Hot Box, assegurando temperatura adequada e qualidade até o consumo.' },
  { title: 'Segurança Alimentar', text: 'Seguimos as boas práticas de higiene 100% regulamentadas pela Vigilância Sanitária.' },
  { title: 'Controle de Qualidade', text: 'Quinzenalmente nosso nutricionista vai até o refeitório de nossos clientes, a fim de conversar com os colaboradores e avaliar o local, para manter um controle de qualidade rigoroso.' },
  { title: 'Refeições Especiais', text: 'Ao inaugurar o refeitório oferecemos um churrasco de boas-vindas. E toda última sexta-feira do mês, servimos um cardápio diferenciado como: feijoada, dia das massas, festa junina, etc.' },
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

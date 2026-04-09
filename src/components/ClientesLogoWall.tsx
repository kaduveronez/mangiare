const CLIENTES = [
  'Braspress', 'Construtora Tedesco', 'Giltar', 'Dup', 'Seta Soluções Visuais',
  'Liquigás', 'EBS', 'TNC', 'TransOliveira', 'Magnetron',
];

export default function ClientesLogoWall() {
  return (
    <div className="clientes__grid">
      {CLIENTES.map((c, i) => (
        <div key={i} className="clientes__item fade-in-up" style={{ transitionDelay: `${i * 60}ms` }}>
          {c}
        </div>
      ))}
    </div>
  );
}

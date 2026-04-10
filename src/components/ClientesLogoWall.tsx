const CLIENTES = [
  { name: 'Braspress', logo: '/clientes_logos/Frame.png' },
  { name: 'Construtora Tedesco', logo: '/clientes_logos/Frame-1.png' },
  { name: 'Giltar', logo: '/clientes_logos/Frame-2.png' },
  { name: 'Dup', logo: '/clientes_logos/Frame-3.png' },
  { name: 'Seta Soluções Visuais', logo: '/clientes_logos/Frame-4.png' },
  { name: 'Liquigás', logo: '/clientes_logos/Frame-5.png' },
  { name: 'EBS', logo: '/clientes_logos/Frame-6.png' },
  { name: 'TNC', logo: '/clientes_logos/Frame-7.png' },
  { name: 'TransOliveira', logo: '/clientes_logos/Frame-8.png' },
  { name: 'Magnetron', logo: '/clientes_logos/Frame-9.png' },
];

export default function ClientesLogoWall() {
  return (
    <div className="clientes__grid">
      {CLIENTES.map((c, i) => (
        <div key={i} className="clientes__item fade-in-up group" style={{ transitionDelay: `${i * 60}ms`, padding: '12px' }}>
          <img 
            src={c.logo} 
            alt={c.name} 
            className="w-full h-full object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0 transition-all duration-300" 
          />
        </div>
      ))}
    </div>
  );
}

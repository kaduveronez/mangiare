import { useState, useEffect } from 'react';
import { useFadeInUp } from '../hooks/useIntersectionObserver';
import PageHero from '../components/PageHero';
import FormField from '../components/FormField';
import fotoRefeitorio1 from '../assets/foto-refeitorio-1.jpg';
import fotoRefeitorio2 from '../assets/foto-refeitorio-2.jpg';
import fotoRefeitorio3 from '../assets/foto-refeitorio-3.jpg';
import fotoRefeitorio4 from '../assets/foto-refeitorio-4.jpg';
import fotoEquipe from '../assets/foto-equipe.jpg';

function Cultura() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section className="sobre">
      <div className="container" ref={ref}>
        <div className="sobre__grid">
          <div className="fade-in-up">
            <h2 className="sobre__title">Aqui, você alimenta vidas — e isso não é força de expressão</h2>
            <p className="sobre__text">
              Todo dia, a nossa equipe chega cedo e prepara centenas de refeições que chegam quentes na mesa de trabalhadores da região. Não é só comida — é o almoço que um pai vai compartilhar mentalmente com a família ao chegar em casa. É o que sustenta a energia de quem constrói, produz e entrega.
            </p>
            <p className="sobre__text">
              Somos uma empresa familiar com 30 anos de história e cultura muito clara: aqui as pessoas são tratadas pelo nome, as conquistas são reconhecidas e quem veste a camisa tem espaço para crescer.
            </p>
            <p className="sobre__text">
              Se você quer um trabalho com propósito real, ambiente saudável e estabilidade de verdade, queremos te conhecer.
            </p>
            <span className="sobre__badge">Empresa familiar com 30+ anos</span>
          </div>
          <div className="fade-in-up" style={{ transitionDelay: '100ms' }}>
            <img src={fotoEquipe} alt="Equipe Mangiare na cozinha industrial" className="sobre__image" loading="lazy" width={960} height={720} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Beneficios() {
  const ref = useFadeInUp<HTMLDivElement>();
  const beneficios = [
    { icon: 'fa-solid fa-shield-halved', titulo: 'Estabilidade', descricao: 'Empresa sólida com mais de 30 anos de atuação contínua. Aqui você tem segurança para construir uma carreira de longo prazo.' },
    { icon: 'fa-solid fa-graduation-cap', titulo: 'Treinamento incluso', descricao: 'Todos os colaboradores recebem treinamento completo em segurança alimentar, higiene e boas práticas de fabricação.' },
    { icon: 'fa-solid fa-utensils', titulo: 'Alimentação gratuita', descricao: 'Refeições diárias sem custo para todos os colaboradores, preparadas com o mesmo cuidado que oferecemos aos nossos clientes.' },
    { icon: 'fa-solid fa-clock', titulo: 'Horários definidos', descricao: 'Jornadas com início e fim estabelecidos. Aqui você consegue planejar sua vida fora do trabalho com previsibilidade.' },
    { icon: 'fa-solid fa-chart-line', titulo: 'Crescimento interno', descricao: 'Valorizamos quem veste a camisa. Promovemos colaboradores internamente sempre que surgem novas lideranças e funções.' },
    { icon: 'fa-solid fa-hands-holding-heart', titulo: 'Ambiente acolhedor', descricao: 'Clima organizacional familiar e respeitoso. Aqui você é tratado como pessoa, não como número.' },
  ];
  return (
    <section style={{ background: 'var(--color-verde)', padding: 'var(--space-section-y) 0' }}>
      <div className="container" ref={ref}>
        <div className="diferenciais__header fade-in-up">
          <p className="section-label" style={{ color: 'var(--color-dourado)' }}>POR QUE TRABALHAR AQUI</p>
          <h2 className="section-title" style={{ color: 'var(--color-creme)' }}>O que oferecemos aos nossos colaboradores</h2>
        </div>
        <div className="diferenciais__grid" style={{ marginTop: 48 }}>
          {beneficios.map((b, i) => (
            <div key={i} className="fade-in-up" style={{ transitionDelay: `${i * 80}ms`, background: 'rgba(255,255,255,0.06)', padding: '28px 24px', borderTop: '3px solid var(--color-dourado)' }}>
              <i className={b.icon} style={{ fontSize: 28, color: 'var(--color-dourado)', marginBottom: 14, display: 'block' }} />
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-creme)', fontSize: 19, marginBottom: 10 }}>{b.titulo}</h3>
              <p style={{ color: '#a0b8b0', fontSize: 14, lineHeight: 1.7 }}>{b.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VagasAbertas() {
  const ref = useFadeInUp<HTMLDivElement>();
  const vagas = [
    { titulo: 'Auxiliar de Cozinha', turno: 'Manhã — 5h às 14h', tipo: 'CLT', descricao: 'Responsável pelo preparo, montagem e higienização de alimentos e utensílios. Experiência prévia em cozinha profissional é um diferencial.' },
    { titulo: 'Cozinheiro(a)', turno: 'Manhã — 5h às 14h', tipo: 'CLT', descricao: 'Produção de refeições corporativas seguindo cardápio desenvolvido por nutricionista. Exige experiência comprovada em cozinha industrial.' },
    { titulo: 'Motorista Entregador', turno: 'Manhã — 6h às 14h', tipo: 'CLT', descricao: 'Entrega de refeições em Hot Box para empresas clientes. Necessário CNH categoria B, experiência em direção urbana e bom relacionamento interpessoal.' },
    { titulo: 'Auxiliar Administrativo', turno: 'Comercial — 8h às 17h', tipo: 'CLT', descricao: 'Apoio nas rotinas de pedidos, faturamento e atendimento ao cliente. Conhecimento em pacote Office e atendimento via WhatsApp.' },
  ];
  return (
    <section style={{ background: 'var(--color-creme)', padding: 'var(--space-section-y) 0' }}>
      <div className="container" ref={ref}>
        <div className="diferenciais__header fade-in-up">
          <p className="section-label" style={{ color: 'var(--color-bordo)' }}>OPORTUNIDADES</p>
          <h2 className="section-title" style={{ color: 'var(--color-verde)' }}>Vagas disponíveis</h2>
          <p className="fade-in-up" style={{ color: '#666', textAlign: 'center', maxWidth: 600, margin: '12px auto 0', transitionDelay: '80ms' }}>
            Não encontrou sua área abaixo? Envie seu currículo mesmo assim — guardamos seu perfil para futuras oportunidades.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 48, maxWidth: 860, margin: '48px auto 0' }}>
          {vagas.map((v, i) => (
            <div key={i} className="fade-in-up" style={{ transitionDelay: `${i * 80}ms`, background: '#fff', padding: '28px 32px', borderLeft: '4px solid var(--color-bordo)', display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ flex: '1 1 340px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-bordo)', fontSize: 20, marginBottom: 8 }}>{v.titulo}</h3>
                <p style={{ color: '#666', fontSize: 14, lineHeight: 1.6 }}>{v.descricao}</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flexShrink: 0 }}>
                <span style={{ background: 'var(--color-verde)', color: '#fff', padding: '4px 12px', fontSize: 12, fontWeight: 600, display: 'inline-block' }}>{v.tipo}</span>
                <span style={{ color: '#888', fontSize: 13 }}><i className="fa-solid fa-clock" style={{ marginRight: 6 }} />{v.turno}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessoSeletivo() {
  const ref = useFadeInUp<HTMLDivElement>();
  const etapas = [
    { num: '01', titulo: 'Candidatura', descricao: 'Preencha o formulário abaixo ou envie seu currículo por e-mail. Guardamos todos os perfis em banco de talentos.' },
    { num: '02', titulo: 'Triagem', descricao: 'Nossa equipe analisa o currículo e entra em contato por telefone ou WhatsApp para um bate-papo inicial.' },
    { num: '03', titulo: 'Entrevista', descricao: 'Convidamos para uma visita à nossa cozinha. É uma boa oportunidade para você conhecer o ambiente e tirar dúvidas.' },
    { num: '04', titulo: 'Início', descricao: 'Se aprovado(a), passamos pelas etapas de documentação, integração e treinamento para um começo tranquilo.' },
  ];
  return (
    <section style={{ background: 'var(--color-preto)', padding: 'var(--space-section-y) 0' }}>
      <div className="container" ref={ref}>
        <div className="diferenciais__header fade-in-up">
          <p className="section-label" style={{ color: 'var(--color-dourado)' }}>PROCESSO SELETIVO</p>
          <h2 className="section-title" style={{ color: 'var(--color-creme)' }}>Como funciona nossa seleção</h2>
        </div>
        <div className="servicos__grid servicos__grid--4col" style={{ marginTop: 48 }}>
          {etapas.map((e, i) => (
            <div key={i} className="fade-in-up" style={{ transitionDelay: `${i * 80}ms`, textAlign: 'center', padding: '0 8px' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', border: '2px solid var(--color-dourado)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <span style={{ color: 'var(--color-dourado)', fontWeight: 700, fontSize: 13 }}>{e.num}</span>
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-creme)', fontSize: 18, marginBottom: 10 }}>{e.titulo}</h3>
              <p style={{ color: '#999', fontSize: 14, lineHeight: 1.6 }}>{e.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const galeriaFotos = [fotoRefeitorio1, fotoRefeitorio2, fotoRefeitorio3, fotoRefeitorio4];
const galeriaAlt = ['Refeitório corporativo', 'Buffet de refeições', 'Cozinha industrial com marmitas', 'Ingredientes frescos na cozinha'];

function GaleriaRefeitorio() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section style={{ background: 'var(--color-creme)', padding: 'var(--space-section-y) 0' }}>
      <div className="container" ref={ref}>
        <h2 className="section-title fade-in-up" style={{ textAlign: 'center', marginBottom: 40, color: 'var(--color-bordo)' }}>Nosso ambiente de trabalho</h2>
        <div className="galeria__grid galeria__grid--4">
          {galeriaFotos.map((foto, i) => (
            <div key={i} className="galeria__item fade-in-up" style={{ transitionDelay: `${i * 80}ms` }}>
              <img src={foto} alt={galeriaAlt[i]} loading="lazy" width={800} height={600} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FormVagas() {
  const ref = useFadeInUp<HTMLDivElement>();
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', area: '', mensagem: '' });
  const set = (k: string) => (v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Candidatura enviada com sucesso! Entraremos em contato em breve.');
    setForm({ nome: '', email: '', telefone: '', area: '', mensagem: '' });
  };

  return (
    <section className="servicos">
      <div className="container" ref={ref}>
        <div className="servicos__header fade-in-up">
          <h2 className="servicos__title">Envie sua candidatura</h2>
          <p className="servicos__subtitle">Preencha o formulário abaixo com seus dados e área de interesse</p>
        </div>
        <form className="contato__form contato__form--centered fade-in-up" onSubmit={handleSubmit}>
          <div className="form-row">
            <FormField label="Nome completo" name="nome" required value={form.nome} onChange={set('nome')} variant="dark" placeholder="Seu nome completo" />
            <FormField label="E-mail" name="email" type="email" required value={form.email} onChange={set('email')} variant="dark" placeholder="seu@email.com" />
          </div>
          <div className="form-row">
            <FormField label="Telefone" name="telefone" type="tel" value={form.telefone} onChange={set('telefone')} variant="dark" placeholder="(47) 99999-9999" />
            <FormField label="Área de interesse" name="area" type="select" value={form.area} onChange={set('area')} variant="dark" options={['Cozinha', 'Logística', 'Administração', 'Outro']} />
          </div>
          <FormField label="Mensagem" name="mensagem" type="textarea" value={form.mensagem} onChange={set('mensagem')} variant="dark" placeholder="Conte-nos sobre você, sua experiência e por que quer trabalhar na Mangiare..." />
          <button type="submit" className="btn-primary">Enviar Candidatura</button>
        </form>
        <p style={{ textAlign: 'center', color: '#aaa', fontSize: 14, marginTop: 20 }}>
          Você também pode enviar seu currículo para{' '}
          <a href="mailto:mangiaree.refeicoes@gmail.com" style={{ color: 'var(--color-dourado)' }}>mangiaree.refeicoes@gmail.com</a>
        </p>
      </div>
    </section>
  );
}

export default function TrabalheConosco() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = document.querySelectorAll('.fade-in-up');
    if (prefersReducedMotion) { elements.forEach(el => el.classList.add('visible')); return; }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
    }, { threshold: 0.15 });
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <PageHero title="Trabalhe Conosco" variant="dourado" />
      <Cultura />
      <Beneficios />
      <VagasAbertas />
      <ProcessoSeletivo />
      <GaleriaRefeitorio />
      <FormVagas />
    </>
  );
}

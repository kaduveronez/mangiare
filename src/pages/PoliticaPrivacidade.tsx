import PageHero from '../components/PageHero';

export default function PoliticaPrivacidade() {
  return (
    <>
      <PageHero title="Política de Privacidade" variant="bordo" />
      <section className="privacidade">
        <div className="privacidade__content">
          <h2>1. Introdução</h2>
          <p>A Mangiare Refeições ("nós", "nosso") está comprometida com a proteção da privacidade dos dados pessoais dos nossos clientes, parceiros e visitantes do site. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).</p>

          <h2>2. Dados Coletados</h2>
          <p>Coletamos apenas os dados fornecidos voluntariamente por você através dos nossos formulários de contato e solicitação de orçamento:</p>
          <ul>
            <li>Nome completo</li>
            <li>Endereço de e-mail</li>
            <li>Número de telefone</li>
            <li>Nome da empresa (quando aplicável)</li>
            <li>CNPJ (quando aplicável)</li>
            <li>Mensagem ou solicitação</li>
          </ul>

          <h2>3. Finalidade do Uso</h2>
          <p>Os dados coletados são utilizados exclusivamente para:</p>
          <ul>
            <li>Responder às suas solicitações de contato e orçamento</li>
            <li>Enviar informações sobre nossos serviços quando solicitado</li>
            <li>Melhorar a qualidade dos nossos serviços</li>
          </ul>
          <p>Não compartilhamos seus dados com terceiros, exceto quando exigido por lei.</p>

          <h2>4. Cookies</h2>
          <p>Nosso site pode utilizar cookies para melhorar a experiência de navegação. Cookies são pequenos arquivos de texto armazenados no seu dispositivo que nos ajudam a entender como você interage com o site. Você pode desativar os cookies nas configurações do seu navegador, embora isso possa afetar algumas funcionalidades do site.</p>

          <h2>5. Direitos do Titular</h2>
          <p>Em conformidade com a LGPD, você tem direito a:</p>
          <ul>
            <li>Confirmar a existência de tratamento dos seus dados</li>
            <li>Acessar seus dados pessoais</li>
            <li>Solicitar a correção de dados incompletos ou desatualizados</li>
            <li>Solicitar a eliminação dos seus dados pessoais</li>
            <li>Revogar o consentimento para o tratamento dos dados</li>
          </ul>

          <h2>6. Contato</h2>
          <p>Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, entre em contato conosco:</p>
          <p><strong>E-mail:</strong> <a href="mailto:contato@mangiarefeicoes.com.br">contato@mangiarefeicoes.com.br</a></p>
          <p><strong>Endereço:</strong> R. Luísa Deranhóli Koschnik, 731 - Aventureiro, Joinville - SC, 89225-570</p>

          <p style={{ marginTop: 40, fontSize: 14, opacity: 0.6 }}>Última atualização: março de 2026.</p>
        </div>
      </section>
    </>
  );
}

import coverRefeitorio from '../assets/blog/refeitorio-empresa.jpg';
import coverTransportada from '../assets/blog/transportada-vs-administrada.jpg';
import coverCustoBeneficio from '../assets/blog/custo-beneficio-comer.jpg';
import coverEstacoes from '../assets/blog/cardapio-estacoes.jpg';
import coverNutricionista from '../assets/blog/cardapio-nutricionista.jpg';
import coverSeguranca from '../assets/blog/seguranca-alimentar.jpg';

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  cover: string;
  readTime: string;
  content: string; // HTML simples
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'vantagens-refeitorio-na-empresa',
    title: 'Vantagens de ter refeitório dentro da empresa',
    category: 'Corporativo',
    date: '02/04/2026',
    excerpt: 'Refeitório próprio é mais que um espaço para almoçar: é uma ferramenta poderosa de retenção, engajamento e bem-estar para o seu time.',
    cover: coverRefeitorio,
    readTime: '6 min de leitura',
    content: `
      <p>Você já parou para pensar em quanto tempo a sua equipe perde, todos os dias, só para resolver o almoço? Sair do prédio, esperar atendimento, voltar correndo para a próxima reunião… É uma maratona silenciosa que cansa, atrasa e, no fim do mês, ainda pesa no bolso de todo mundo.</p>
      <p>É exatamente aí que entra um refeitório dentro da empresa. Mais do que um espaço bonito com mesas e cadeiras, ele é uma decisão estratégica de gestão de pessoas. E os impactos vão muito além da hora do almoço.</p>

      <h2>Por que oferecer refeitório virou diferencial competitivo</h2>
      <p>Quando o colaborador come bem, no horário certo e em um ambiente agradável, ele rende mais. Parece óbvio, mas muita empresa ainda trata alimentação como custo, não como investimento. Quem oferece refeitório próprio (mesmo terceirizado, com refeições transportadas) sai na frente em três frentes:</p>
      <ul>
        <li><strong>Retenção de talentos:</strong> alimentação de qualidade aparece entre os 5 benefícios mais valorizados em pesquisas de clima.</li>
        <li><strong>Atração de novos profissionais:</strong> em entrevistas, é uma das primeiras perguntas — “tem refeitório?”.</li>
        <li><strong>Imagem da marca empregadora:</strong> empresa que cuida de quem trabalha nela é lembrada (e indicada).</li>
      </ul>

      <h2>Os benefícios práticos para a sua equipe</h2>
      <p>Vamos ao que importa no dia a dia. Ter refeitório significa:</p>
      <ul>
        <li><strong>Mais tempo de descanso real.</strong> Sem deslocamento, o colaborador almoça com calma e ainda sobra tempo para um café com os colegas.</li>
        <li><strong>Refeição balanceada todos os dias.</strong> Cardápio pensado por nutricionista, não o salgado da padaria da esquina.</li>
        <li><strong>Economia no orçamento pessoal.</strong> Almoço fora, hoje, custa em média R$ 35 a R$ 50 por dia. Faz a conta no mês.</li>
        <li><strong>Convivência e cultura.</strong> A mesa do almoço é onde times se conhecem de verdade — e isso fortalece o senso de pertencimento.</li>
      </ul>

      <blockquote>“O refeitório é o único momento do dia em que pessoas de áreas diferentes se sentam juntas. Vale ouro para a cultura.”</blockquote>

      <h2>E para o RH e para o negócio?</h2>
      <p>Os números falam por si:</p>
      <ul>
        <li>Redução de até <strong>30% no absenteísmo</strong> ligado a problemas digestivos e cansaço.</li>
        <li>Queda no turnover em áreas operacionais, onde a refeição é parte central da jornada.</li>
        <li>Mais foco no pós-almoço — quem come bem volta para o trabalho disposto, não pesado.</li>
      </ul>
      <p>E o melhor: você não precisa montar uma cozinha industrial dentro da empresa para ter tudo isso. Com refeições transportadas em hot box, dá para servir comida fresca, quente e variada usando só um espaço de copa adaptado.</p>

      <h2>Como começar</h2>
      <p>O primeiro passo é entender o perfil do seu time: quantas pessoas, quais turnos, quais restrições alimentares. A partir daí, um parceiro especializado monta o cardápio, define a logística e instala o necessário. Em poucas semanas, o refeitório está rodando.</p>
      <p>Se a sua empresa ainda não oferece, talvez seja a hora de repensar. Cuidar da alimentação é cuidar das pessoas — e cuidar das pessoas sempre foi o melhor negócio.</p>
    `,
  },
  {
    slug: 'refeicao-transportada-vs-administrada',
    title: 'Refeição transportada vs. refeição administrada: qual escolher?',
    category: 'Corporativo',
    date: '28/03/2026',
    excerpt: 'Entenda a diferença entre os dois modelos e descubra por que a refeição transportada virou a opção preferida de empresas que não querem montar cozinha no local.',
    cover: coverTransportada,
    readTime: '5 min de leitura',
    content: `
      <p>Na hora de oferecer alimentação para a equipe, toda empresa esbarra na mesma dúvida: <strong>monto uma cozinha aqui dentro ou recebo a comida pronta?</strong> São dois modelos bem diferentes, e a escolha certa depende muito do tamanho da operação, do espaço disponível e — principalmente — do quanto você quer (ou não) se envolver com a parte operacional.</p>
      <p>Vamos descomplicar.</p>

      <h2>Refeição administrada: a cozinha vem pra dentro</h2>
      <p>Nesse modelo, a empresa terceirizada monta uma cozinha completa dentro da sua sede. Cozinheiros, equipamentos, estoque, gás, sistema de exaustão, área de pré-preparo, câmara fria… tudo no seu espaço.</p>
      <p><strong>Vantagens:</strong> comida feita na hora, cardápio totalmente personalizado, possibilidade de servir grelhados ao vivo.</p>
      <p><strong>Desvantagens:</strong> exige muito espaço (em média 80 a 150 m²), alvarás específicos da vigilância sanitária, investimento alto em estrutura e responsabilidade compartilhada sobre a operação.</p>
      <p>É um modelo que faz sentido para empresas com mais de 500 refeições/dia e espaço sobrando.</p>

      <h2>Refeição transportada: praticidade sem dor de cabeça</h2>
      <p>Aqui, a comida é preparada em uma cozinha industrial certificada (a nossa, por exemplo) e entregue pronta na sua empresa, dentro de hot boxes que mantêm a temperatura ideal por horas. Você só precisa de uma área de distribuição — uma copa adaptada já resolve.</p>
      <p><strong>Vantagens:</strong></p>
      <ul>
        <li><strong>Zero estrutura física:</strong> nada de obra, fogão industrial ou exaustor.</li>
        <li><strong>Zero responsabilidade sanitária no local:</strong> toda a parte de vigilância sanitária fica com o fornecedor.</li>
        <li><strong>Custo previsível:</strong> você paga por refeição entregue, sem surpresas com manutenção, gás ou desperdício.</li>
        <li><strong>Implantação rápida:</strong> em poucos dias o serviço está rodando.</li>
        <li><strong>Cardápio variado:</strong> rodízio semanal pensado por nutricionista.</li>
      </ul>
      <p><strong>Desvantagens:</strong> menos flexibilidade para grelhados na hora — mas isso é facilmente compensado por opções quentes, frias e sobremesas variadas.</p>

      <blockquote>“Refeição transportada é o melhor dos dois mundos: a qualidade de uma cozinha industrial, sem o trabalho de manter uma.”</blockquote>

      <h2>Quando cada modelo faz sentido</h2>
      <ul>
        <li><strong>Até 800 refeições/dia, sem sobra de espaço:</strong> transportada quase sempre vence.</li>
        <li><strong>Acima de 1.000 refeições/dia, com espaço amplo e desejo de cozinha ao vivo:</strong> administrada pode compensar.</li>
        <li><strong>Operação 24h ou em múltiplos turnos:</strong> transportada se adapta melhor, com entregas escalonadas.</li>
      </ul>

      <h2>O ponto-chave</h2>
      <p>O grande atrativo da refeição transportada é não precisar montar — nem manter — uma cozinha dentro da empresa. Isso significa menos custo fixo, menos burocracia e mais foco no que a sua empresa realmente faz. Você terceiriza a complexidade e fica só com o resultado: comida boa, quente e na hora certa para o seu time.</p>
      <p>Para a maioria das empresas brasileiras, é a escolha mais inteligente. E a tendência só cresce.</p>
    `,
  },
  {
    slug: 'custo-beneficio-comer-fora-vs-cozinhar-em-casa',
    title: 'Custo-benefício: comer fora vs. cozinhar em casa',
    category: 'Nutrição',
    date: '21/03/2026',
    excerpt: 'Cozinhar em casa parece sempre mais barato — mas será que é mesmo? Veja a conta completa, considerando tempo, energia, qualidade e o seu sossego.',
    cover: coverCustoBeneficio,
    readTime: '5 min de leitura',
    content: `
      <p>“Comer fora é caro, melhor cozinhar em casa.” Você já ouviu (ou disse) essa frase. E ela parece fazer todo sentido — afinal, R$ 40 por refeição soa bem mais que um arroz com feijão preparado na cozinha. Mas quando a gente olha pra conta inteira, a história muda. E muito.</p>
      <p>Vamos colocar tudo na mesa, com calma.</p>

      <h2>A conta visível: só os ingredientes</h2>
      <p>Se você pesar só o preço dos itens crus, cozinhar em casa quase sempre ganha. Um almoço caseiro completo (arroz, feijão, proteína, salada) custa em torno de <strong>R$ 12 a R$ 18</strong>. Comer fora, em um restaurante decente, sai por <strong>R$ 35 a R$ 55</strong>.</p>
      <p>Diferença óbvia, certo? Calma, ainda falta muita coisa nessa equação.</p>

      <h2>A conta invisível: tudo o que ninguém soma</h2>
      <p>Quando você cozinha em casa, o gasto real inclui:</p>
      <ul>
        <li><strong>Tempo de planejamento:</strong> pensar no cardápio, fazer lista.</li>
        <li><strong>Tempo de compra:</strong> ir ao mercado ou esperar a entrega (em média 2h por semana).</li>
        <li><strong>Tempo de preparo:</strong> 40 a 90 minutos por dia, contando pré-preparo e cozimento.</li>
        <li><strong>Tempo de louça:</strong> mais 15 a 25 minutos.</li>
        <li><strong>Gás, luz, água:</strong> pequeno, mas existe.</li>
        <li><strong>Desperdício:</strong> alface que estraga, sobra que ninguém come.</li>
      </ul>
      <p>Se a sua hora vale R$ 30 (média conservadora para um profissional CLT), só o tempo investido em cozinhar custa entre <strong>R$ 25 e R$ 60 por dia</strong>. Some isso aos R$ 15 dos ingredientes e a “refeição barata” já bateu nos R$ 60. Sem contar o cansaço.</p>

      <blockquote>“O custo real de cozinhar em casa não está no que você gasta — está no que você deixa de fazer enquanto cozinha.”</blockquote>

      <h2>E a qualidade? Quem ganha?</h2>
      <p>Aqui depende muito de onde você come fora.</p>
      <ul>
        <li><strong>Self-service de canto, fast food:</strong> em geral, perde feio para a comida caseira em equilíbrio nutricional.</li>
        <li><strong>Restaurante com nutricionista, marmita planejada, refeitório corporativo de qualidade:</strong> empata ou ganha. Há variedade, porções controladas, vegetais frescos e proteínas em quantidade adequada — coisa que, em casa, no cansaço do dia, raramente acontece.</li>
      </ul>

      <h2>O meio-termo que resolve a vida</h2>
      <p>Para a maioria das pessoas, a melhor solução não é “sempre em casa” nem “sempre fora”. É um arranjo inteligente:</p>
      <ul>
        <li><strong>Almoço durante a semana:</strong> resolva com refeitório da empresa ou marmita pronta de qualidade. Você ganha tempo, variedade e equilíbrio nutricional.</li>
        <li><strong>Jantar e fim de semana:</strong> cozinhe em casa, com calma, no seu ritmo. Aí sim a comida caseira faz sentido — é prazer, não obrigação.</li>
      </ul>

      <h2>O verdadeiro custo-benefício</h2>
      <p>No fim, a pergunta certa não é “o que é mais barato?”. É <strong>“o que me dá mais qualidade de vida pelo que eu pago?”</strong>. Tempo livre, refeição equilibrada, menos louça e menos peso mental valem muito mais do que os R$ 20 que você “economiza” cozinhando todo dia.</p>
      <p>Pense nisso na próxima vez que olhar para a panela vazia às 19h.</p>
    `,
  },
  {
    slug: 'personalizacao-cardapio-por-estacao-do-ano',
    title: 'Personalização de cardápio por estação do ano',
    category: 'Nutrição',
    date: '14/03/2026',
    excerpt: 'Comer no ritmo da natureza não é frescura — é mais sabor, mais qualidade, menos custo e ingredientes no auge. Entenda como funciona a sazonalidade no cardápio.',
    cover: coverEstacoes,
    readTime: '5 min de leitura',
    content: `
      <p>Você já reparou que o tomate de janeiro é uma coisa e o de julho é outra completamente diferente? Ou que o morango do inverno é mais doce e barato? Não é coincidência. É a estação do ano fazendo o trabalho dela.</p>
      <p>Adaptar o cardápio conforme as estações é uma das práticas mais inteligentes da gastronomia profissional. E ela vai muito além de “servir sopa no inverno”. Bora entender por quê.</p>

      <h2>O que é cardápio sazonal, na prática</h2>
      <p>É um cardápio que muda ao longo do ano para acompanhar três coisas:</p>
      <ul>
        <li><strong>Os ingredientes que estão na safra</strong> (frutas, verduras, legumes no auge da qualidade).</li>
        <li><strong>O clima</strong> (mais quente ou mais frio influencia o que o corpo pede).</li>
        <li><strong>A perecibilidade</strong> (no calor, alguns alimentos exigem cuidado redobrado e logística diferente).</li>
      </ul>

      <h2>Por que vale a pena adaptar por estação</h2>
      <h3>1. Sabor no ponto certo</h3>
      <p>Um vegetal colhido na safra é mais doce, mais firme, mais perfumado. Fora de época, ele é cultivado em estufa ou vem de longe — chega na cozinha sem o mesmo brilho.</p>
      <h3>2. Custo mais baixo</h3>
      <p>Quando o produto está na safra, a oferta é alta e o preço cai. Isso permite servir variedade sem inflar o ticket da refeição.</p>
      <h3>3. Qualidade nutricional maior</h3>
      <p>Alimentos colhidos no tempo certo concentram mais vitaminas, minerais e antioxidantes. Vale para o tomate de verão, para o agrião do inverno, para a manga no fim do ano.</p>
      <h3>4. Menos desperdício e mais segurança</h3>
      <p>No verão, alguns ingredientes (maioneses, folhosos delicados, frutos do mar) exigem cuidado extra com temperatura. Trocar por opções mais robustas reduz risco e desperdício.</p>
      <h3>5. O corpo agradece</h3>
      <p>No frio, o corpo pede pratos mais quentes, encorpados e calóricos: caldos, ensopados, raízes. No calor, pede leveza: saladas, frutas, grelhados, refrescantes. Servir conforme a estação é, literalmente, ouvir o que as pessoas precisam.</p>

      <blockquote>“Cardápio sazonal não é tendência — é como a cozinha sempre funcionou. Estamos só voltando a respeitar isso.”</blockquote>

      <h2>Exemplos de adaptação ao longo do ano</h2>
      <ul>
        <li><strong>Verão:</strong> saladas variadas, frutas da estação (manga, abacaxi, melancia), grelhados, sucos naturais, sobremesas geladas.</li>
        <li><strong>Outono:</strong> abóbora, batata-doce, cogumelos, sopas leves, pratos com gengibre.</li>
        <li><strong>Inverno:</strong> ensopados, feijoada, sopas encorpadas, raízes, caldo verde, frutas cítricas (laranja, tangerina).</li>
        <li><strong>Primavera:</strong> verduras tenras, ervilhas frescas, morangos, pratos mais leves e coloridos.</li>
      </ul>

      <h2>Como aplicamos isso no dia a dia</h2>
      <p>Nosso cardápio é revisado a cada estação, sempre com nutricionista junto. Trocamos ingredientes, ajustamos temperos, repensamos sobremesas. O objetivo é simples: <strong>comida que faz sentido para o momento do ano</strong>. Que cabe no clima, que respeita a safra e que custa menos sem perder qualidade.</p>
      <p>É isso que separa um cardápio repetitivo de um cardápio vivo. E é isso que mantém o pessoal animado para chegar no refeitório todo dia — porque sempre tem algo novo, no tempo certo.</p>
    `,
  },
  {
    slug: 'como-escolher-refeicoes-corporativas',
    title: 'Como escolher refeições corporativas de qualidade',
    category: 'Corporativo',
    date: '07/03/2026',
    excerpt: 'Critérios essenciais para selecionar um fornecedor de refeições que atenda às reais necessidades da sua equipe — sem cair em pegadinhas.',
    cover: coverRefeitorio,
    readTime: '5 min de leitura',
    content: `
      <p>Escolher quem vai alimentar a sua equipe todos os dias é uma decisão muito mais importante do que parece. Não é só comprar comida — é confiar a saúde, o humor e parte da experiência de trabalho do seu time a um parceiro externo. Por isso, vale ir além do preço da refeição.</p>

      <h2>1. Cardápio assinado por nutricionista</h2>
      <p>Não basta ter “opção saudável”. O cardápio inteiro precisa ser balanceado, com porções adequadas, variedade semanal e atenção a restrições (vegetariano, sem lactose, sem glúten). Pergunte se há nutricionista responsável e peça para ver um cardápio de exemplo.</p>

      <h2>2. Estrutura sanitária comprovada</h2>
      <p>Visite a cozinha do fornecedor. Sim, peça para visitar. Veja o estado dos equipamentos, da câmara fria, da área de manipulação. Confira se tem alvará da vigilância sanitária e procedimentos de controle (POPs, registros de temperatura, treinamento de equipe).</p>

      <h2>3. Logística de transporte e temperatura</h2>
      <p>Comida quente que chega morna é um problema. Pergunte sobre o sistema de hot box, o tempo entre o preparo e a entrega, e como é feito o controle de temperatura na chegada. Isso impacta sabor e segurança.</p>

      <h2>4. Flexibilidade para o seu perfil</h2>
      <p>Sua empresa tem turnos diferentes? Eventos pontuais? Picos sazonais? O fornecedor precisa se adaptar — e não te enquadrar num pacote engessado.</p>

      <h2>5. Atendimento humano</h2>
      <p>Em algum momento vai dar problema. Falta um item, alguém reclama de um prato, surge uma demanda urgente. Quem te atende? Tem alguém para responder rápido, ou só um e-mail genérico? Isso faz toda a diferença no longo prazo.</p>

      <blockquote>“Escolher refeição corporativa pelo preço mais baixo é o caminho mais rápido para trocar de fornecedor em seis meses.”</blockquote>

      <h2>6. Referências reais</h2>
      <p>Peça contatos de clientes atuais. Ligue. Pergunte sobre regularidade, qualidade, atendimento, capacidade de resolver problemas. Empresa boa não tem medo de mostrar quem atende.</p>

      <h2>O resumo</h2>
      <p>Refeição corporativa de qualidade é a soma de muitos detalhes: cardápio bem pensado, cozinha higienizada, logística no ponto, gente que se importa. Quando você acerta nessa escolha, todo mundo ganha — sua equipe come melhor, o RH trabalha menos com reclamação, e a empresa fortalece a cultura de cuidado.</p>
    `,
  },
  {
    slug: 'seguranca-alimentar-empresa',
    title: 'Segurança alimentar: o que sua empresa precisa saber',
    category: 'Segurança Alimentar',
    date: '28/02/2026',
    excerpt: 'Normas, práticas e cuidados que garantem a qualidade das refeições servidas no ambiente corporativo — e protegem a sua equipe.',
    cover: coverSeguranca,
    readTime: '5 min de leitura',
    content: `
      <p>Segurança alimentar parece um assunto técnico, distante. Mas basta uma intoxicação coletiva para entender, na pior hora, o quanto ela é prática e urgente. Este texto é um guia rápido para gestores, RH e qualquer pessoa que contrate refeição para um time.</p>

      <h2>O que é segurança alimentar, na prática</h2>
      <p>É o conjunto de cuidados que garantem que a comida chegue até o prato sem causar dano à saúde. Envolve higiene, controle de temperatura, qualidade dos ingredientes, treinamento da equipe e rastreabilidade.</p>

      <h2>As normas que regem o setor no Brasil</h2>
      <ul>
        <li><strong>RDC 216/2004 da Anvisa:</strong> regulamento principal sobre boas práticas em serviços de alimentação.</li>
        <li><strong>Vigilância Sanitária local:</strong> alvará e fiscalização do município.</li>
        <li><strong>Portarias estaduais e municipais:</strong> podem complementar a RDC com exigências específicas.</li>
      </ul>

      <h2>Os pontos críticos do dia a dia</h2>
      <h3>Temperatura</h3>
      <p>Comida quente precisa ficar acima de 60°C; comida fria, abaixo de 5°C. Entre 5°C e 60°C está a “zona de perigo”, onde bactérias se multiplicam rapidamente.</p>
      <h3>Higiene de manipuladores</h3>
      <p>Lavagem de mãos, uniforme limpo, cabelo preso, sem adornos. Parece básico — e é justamente por isso que falha tanto. Treinamento contínuo é obrigatório.</p>
      <h3>Cruzamento de alimentos</h3>
      <p>Crus e cozidos não podem entrar em contato. Tábuas, facas e bancadas precisam ser separadas ou devidamente higienizadas entre etapas.</p>
      <h3>Rastreabilidade</h3>
      <p>Saber a origem de cada lote é essencial para resolver rapidamente qualquer problema.</p>

      <blockquote>“Segurança alimentar não se vê quando funciona — só quando falha. Por isso é fácil cortar custos no lugar errado.”</blockquote>

      <h2>O que cobrar do seu fornecedor</h2>
      <ul>
        <li>Alvará sanitário em dia.</li>
        <li>Manual de Boas Práticas e POPs documentados.</li>
        <li>Equipe treinada com registro periódico.</li>
        <li>Controle de temperatura registrado em todas as etapas.</li>
        <li>Análises microbiológicas periódicas dos pratos servidos.</li>
      </ul>

      <p>Não tenha vergonha de pedir esses documentos. Empresa séria entrega na hora.</p>
    `,
  },
  {
    slug: 'beneficios-cardapio-nutricionista',
    title: 'Benefícios de um cardápio desenvolvido por nutricionista',
    category: 'Nutrição',
    date: '21/02/2026',
    excerpt: 'Saiba como um cardápio planejado por profissionais melhora a saúde, o humor e a produtividade dos colaboradores.',
    cover: coverNutricionista,
    readTime: '4 min de leitura',
    content: `
      <p>Você pode ter o melhor cozinheiro do mundo. Se o cardápio não tiver planejamento nutricional, vai sobrar gordura, faltar fibra e a equipe vai sair pesada do refeitório. Por isso, ter nutricionista por trás do cardápio não é luxo — é base.</p>

      <h2>O que muda com um cardápio profissional</h2>
      <ul>
        <li><strong>Equilíbrio de macronutrientes:</strong> proporção certa de carboidrato, proteína e gordura em cada refeição.</li>
        <li><strong>Variedade real:</strong> rodízio semanal evita enjoo e garante diferentes vitaminas e minerais ao longo do mês.</li>
        <li><strong>Atendimento a restrições:</strong> opções vegetarianas, sem lactose, sem glúten — sem improviso.</li>
        <li><strong>Porções adequadas:</strong> nem pouco (que dá fome em duas horas), nem demais (que dá sono na tarde).</li>
      </ul>

      <h2>Impactos concretos no trabalho</h2>
      <p>Refeição equilibrada significa energia mais estável durante a tarde. Menos pico de açúcar, menos sonolência pós-almoço, mais foco. E, no longo prazo, menos doenças crônicas — o que reduz absenteísmo.</p>

      <blockquote>“Comer bem é o investimento de menor custo e maior retorno que uma empresa pode oferecer.”</blockquote>

      <p>Se o seu fornecedor atual não tem nutricionista responsável pelo cardápio, é hora de rever o contrato. O custo não é maior — só o cuidado é.</p>
    `,
  },
  {
    slug: 'hot-box-temperatura-ideal',
    title: 'Hot Box: a tecnologia por trás da temperatura ideal',
    category: 'Segurança Alimentar',
    date: '14/02/2026',
    excerpt: 'Descubra como o sistema Hot Box mantém temperatura, sabor e segurança das refeições durante o transporte.',
    cover: coverTransportada,
    readTime: '4 min de leitura',
    content: `
      <p>Quando uma refeição sai da cozinha quente e chega quente no destino, parece mágica. Não é. É engenharia simples, eficiente e essencial: o sistema hot box.</p>

      <h2>O que é uma hot box</h2>
      <p>É um recipiente térmico de aço inox com isolamento de alta densidade. Ele mantém o conteúdo acima de 60°C por várias horas — exatamente a temperatura segura para comida pronta.</p>

      <h2>Por que é importante</h2>
      <ul>
        <li><strong>Segurança:</strong> mantém a comida fora da “zona de perigo” (5°C a 60°C), onde bactérias se multiplicam.</li>
        <li><strong>Sabor:</strong> alimentos não esfriam, não ressecam, não perdem textura.</li>
        <li><strong>Logística:</strong> permite atender vários clientes em uma única rota, sem perda de qualidade.</li>
      </ul>

      <h2>Como funciona na prática</h2>
      <p>A comida sai da cozinha em cubas gastronômicas, é colocada na hot box, lacrada e transportada em veículo apropriado. Na chegada, a temperatura é medida e registrada antes da distribuição. Tudo rastreável.</p>

      <blockquote>“Temperatura é a métrica mais simples — e mais decisiva — da segurança alimentar.”</blockquote>

      <p>Toda vez que você recebe uma refeição quente no horário certo, tem uma hot box no meio do caminho fazendo um trabalho silencioso e indispensável.</p>
    `,
  },
];

export const BLOG_CATEGORIES = ['Todos', 'Nutrição', 'Segurança Alimentar', 'Corporativo'];

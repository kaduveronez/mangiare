export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
}

export const BLOG_POSTS: BlogPost[] = [
  { slug: 'como-escolher-refeicoes-corporativas', title: 'Como escolher refeições corporativas de qualidade', category: 'Corporativo', date: '02/04/2026', excerpt: 'Descubra os critérios essenciais para selecionar um fornecedor de refeições que atenda às necessidades da sua equipe.' },
  { slug: 'seguranca-alimentar-empresa', title: 'Segurança alimentar: o que sua empresa precisa saber', category: 'Segurança Alimentar', date: '28/03/2026', excerpt: 'Entenda as normas e práticas que garantem a qualidade e segurança das refeições servidas no ambiente corporativo.' },
  { slug: 'beneficios-cardapio-nutricionista', title: 'Benefícios de um cardápio desenvolvido por nutricionista', category: 'Nutrição', date: '21/03/2026', excerpt: 'Saiba como um cardápio planejado por profissionais pode melhorar a saúde e produtividade dos colaboradores.' },
  { slug: 'refeicoes-transportadas-logistica', title: 'Refeições transportadas: como funciona a logística', category: 'Corporativo', date: '14/03/2026', excerpt: 'Conheça o processo logístico que garante refeições quentes e saborosas entregues no horário certo.' },
  { slug: 'hot-box-temperatura-ideal', title: 'Hot Box: a tecnologia por trás da temperatura ideal', category: 'Segurança Alimentar', date: '07/03/2026', excerpt: 'Descubra como o sistema Hot Box mantém a temperatura e qualidade das refeições durante o transporte.' },
  { slug: 'alimentacao-produtividade-equipe', title: 'Por que a alimentação impacta a produtividade da equipe', category: 'Nutrição', date: '28/02/2026', excerpt: 'Estudos mostram que uma alimentação equilibrada pode aumentar significativamente o desempenho no trabalho.' },
];

export const BLOG_CATEGORIES = ['Todos', 'Nutrição', 'Segurança Alimentar', 'Corporativo'];

import { useFadeInUp } from '../hooks/useIntersectionObserver';

interface Props {
  title: string;
  subtitle?: string;
  variant?: 'bordo' | 'verde' | 'dourado';
}

export default function PageHero({ title, subtitle, variant = 'bordo' }: Props) {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section className={`page-hero page-hero--${variant}`}>
      <div ref={ref} className="fade-in-up">
        <h1>{title}</h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}

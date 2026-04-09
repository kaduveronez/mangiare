interface Props {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  options?: string[];
  placeholder?: string;
  variant?: 'light' | 'dark';
}

export default function FormField({ label, name, type = 'text', required, value, onChange, options, placeholder, variant = 'light' }: Props) {
  const cls = `form-group ${variant === 'dark' ? 'form-group--dark' : ''}`;

  return (
    <div className={cls}>
      <label htmlFor={name}>{label}{required && ' *'}</label>
      {type === 'textarea' ? (
        <textarea id={name} name={name} required={required} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} />
      ) : type === 'select' && options ? (
        <select id={name} name={name} required={required} value={value} onChange={e => onChange(e.target.value)}>
          <option value="">Selecione...</option>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : (
        <input id={name} name={name} type={type} required={required} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} />
      )}
    </div>
  );
}

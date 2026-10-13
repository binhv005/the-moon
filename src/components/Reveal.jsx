import { useScrollReveal } from '../hooks/useScrollReveal.js';

// kind: 'up' | 'left' | 'right' | 'fade'
export default function Reveal({ as: Tag = 'div', kind = 'up', delay = 0, className = '', style, children, ...rest }) {
  const [ref, visible] = useScrollReveal();
  return (
    <Tag ref={ref} className={`reveal reveal--${kind} ${visible ? 'is-visible' : ''} ${className}`} style={{ '--delay': `${delay}ms`, ...style }} {...rest}>
      {children}
    </Tag>
  );
}

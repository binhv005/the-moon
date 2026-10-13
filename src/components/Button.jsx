import { scrollToId, EXTERNAL } from '../utils.js';

// variant: primary | secondary | light | ghost. `to` cuộn đến section, `href` là liên kết, còn lại là nút.
export default function Button({ variant = 'primary', to, href, external, onClick, icon: Icon, children, className = '', ...rest }) {
  const cls = `btn btn--${variant} ${className}`;
  const inner = (
    <>
      {Icon && <Icon size={17} strokeWidth={1.8} aria-hidden="true" />}
      <span>{children}</span>
    </>
  );
  if (to) {
    return (
      <a
        href={`#${to}`}
        className={cls}
        onClick={(e) => {
          e.preventDefault();
          onClick?.();
          scrollToId(to);
        }}
        {...rest}
      >
        {inner}
      </a>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} {...(external ? EXTERNAL : {})} {...rest}>
        {inner}
      </a>
    );
  }
  return (
    <button type="button" className={cls} onClick={onClick} {...rest}>
      {inner}
    </button>
  );
}

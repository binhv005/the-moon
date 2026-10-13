const reduced = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'start' });
  if (history.replaceState) history.replaceState(null, '', `#${id}`);
};

export const emit = (name, detail) => window.dispatchEvent(new CustomEvent(name, { detail }));
export const on = (name, fn) => {
  const h = (e) => fn(e.detail);
  window.addEventListener(name, h);
  return () => window.removeEventListener(name, h);
};

export const EXTERNAL = { target: '_blank', rel: 'noopener noreferrer' };

// Nối hai từ cuối bằng khoảng trắng không ngắt để dòng cuối luôn có ít nhất 2 từ.
export const nb = (text) => (typeof text === 'string' ? text.replace(/ ([^ ]+)$/, ' $1') : text);

import { nb } from '../utils.js';
import Reveal from './Reveal.jsx';

export default function SectionHeading({ eyebrow, title, text, id, align = 'left' }) {
  return (
    <Reveal className={`section-heading section-heading--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id}>{nb(title)}</h2>
      {text && <p className="section-heading__text">{nb(text)}</p>}
    </Reveal>
  );
}

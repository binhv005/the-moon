import { properties } from '../data/properties.js';
import SectionHeading from './SectionHeading.jsx';
import PropertyCard from './PropertyCard.jsx';

export default function PropertiesSection() {
  return (
    <section id="co-so" className="section" aria-labelledby="properties-title">
      <div className="container">
        <SectionHeading id="properties-title" eyebrow="Hai cơ sở" title="Khám phá hai cơ sở của The Moon" />
        <div className="properties">
          {properties.map((p, i) => (
            <PropertyCard key={p.id} property={p} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}

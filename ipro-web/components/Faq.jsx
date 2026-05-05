'use client'
import { useState } from 'react';

const FAQS = [
  {
    q: '¿Qué garantía tienen los equipos vendidos?',
    a: 'Todos los equipos de grado A y B incluyen 90 días de garantía sobre fallas de funcionamiento. No cubre daños físicos posteriores a la compra. Entregamos comprobante con número de serie y condición.',
  },
  {
    q: '¿Cuánto demora una reparación?',
    a: 'Las reparaciones estándar (batería, pantalla, conector) se realizan en el día, entre 2 y 4 horas hábiles. Reparaciones de placa o módulos de cámara pueden demorar hasta 48 horas. Te avisamos por WhatsApp cuando el equipo está listo.',
  },
  {
    q: '¿Cómo funciona el plan de canje?',
    a: 'Completás el formulario de valoración, recibís una oferta por WhatsApp en menos de 24 horas. Si acordamos precio, traés tu equipo al local, verificamos condiciones y realizamos el canje o la diferencia en efectivo o transferencia. Sin costos ocultos.',
  },
  {
    q: '¿Qué métodos de pago aceptan?',
    a: 'Aceptamos efectivo en pesos y dólares, transferencia bancaria (CVU/CBU), Mercado Pago y criptomonedas estables (USDT). Para compras en cuotas consultá disponibilidad según el equipo.',
  },
  {
    q: '¿Los equipos son libres de iCloud?',
    a: 'Sí. Todos los equipos se verifican libres de iCloud antes de la venta. Podés verificarlo con tu propio Apple ID en el momento de la transacción, sin apuro.',
  },
  {
    q: '¿Realizan envíos a todo el país?',
    a: 'Sí. Coordinamos envíos por Andreani o OCA a todo el territorio nacional. El costo lo abona el comprador. Para reparaciones solo atendemos de forma presencial.',
  },
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq">
      <p className="section-label reveal">FAQ — Preguntas frecuentes</p>
      <h2 className="section-title reveal">Todo lo que<br /><span className="dim">necesitás saber.</span></h2>
      <div className="reveal">
        {FAQS.map((faq, idx) => (
          <div key={idx} className={`faq-item ${openIdx === idx ? 'open' : ''}`}>
            <button className="faq-q" onClick={() => toggleFaq(idx)}>
              <span className="faq-q-text">{faq.q}</span>
              <span className="faq-icon">+</span>
            </button>
            <div className="faq-a">
              <p>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

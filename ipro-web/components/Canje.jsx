'use client'
import { useState } from 'react';

const MODELS = [
  'iPhone 7', 'iPhone 7 Plus', 'iPhone 8', 'iPhone 8 Plus',
  'iPhone X', 'iPhone XS', 'iPhone XS Max', 'iPhone XR',
  'iPhone 11', 'iPhone 11 Pro', 'iPhone 11 Pro Max',
  'iPhone 12', 'iPhone 12 Mini', 'iPhone 12 Pro', 'iPhone 12 Pro Max',
  'iPhone 13', 'iPhone 13 Mini', 'iPhone 13 Pro', 'iPhone 13 Pro Max',
  'iPhone 14', 'iPhone 14 Plus', 'iPhone 14 Pro', 'iPhone 14 Pro Max',
  'iPhone 15', 'iPhone 15 Plus', 'iPhone 15 Pro', 'iPhone 15 Pro Max',
];

const DESIRED_MODELS = [
  'iPhone 14', 'iPhone 14 Pro', 'iPhone 14 Pro Max',
  'iPhone 15', 'iPhone 15 Plus', 'iPhone 15 Pro', 'iPhone 15 Pro Max',
  'Todavía no lo sé',
];

const STORAGES = ['64 GB', '128 GB', '256 GB', '512 GB', '1 TB'];

export default function Canje() {
  const [currentStep, setCurrentStep] = useState(1);
  const [currentModel, setCurrentModel] = useState('');
  const [currentStorage, setCurrentStorage] = useState('');
  const [battery, setBattery] = useState(85);
  const [aestheticCondition, setAestheticCondition] = useState('');
  const [aestheticNotes, setAestheticNotes] = useState('');
  const [desiredModel, setDesiredModel] = useState('');
  const [contactName, setContactName] = useState('');

  const goToStep = (n) => setCurrentStep(n);
  const nextStep = () => { if (currentStep < 4) goToStep(currentStep + 1); };
  const prevStep = () => { if (currentStep > 1) goToStep(currentStep - 1); };

  const sendToWhatsApp = () => {
    const msg = `*SOLICITUD DE VALORACION — iPro Center*\n\n` +
      `Nombre: ${contactName || 'Sin nombre'}\n` +
      `Modelo actual: ${currentModel || 'No especificado'} ${currentStorage || ''}\n` +
      `Salud bateria: ${battery}%\n` +
      `Condicion estetica: ${aestheticCondition || 'No especificado'}\n` +
      `Detalles: ${aestheticNotes || '—'}\n` +
      `Modelo deseado: ${desiredModel || 'No especificado'}\n\n` +
      `Solicito valoracion para plan canje.`;
    window.open(`https://wa.me/5493515185799?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="canje">
      <p className="section-label reveal">Plan Canje — Valoración en tiempo real</p>
      <h2 className="section-title reveal">Tu iPhone<br /><span className="dim">vale más</span><br />de lo que creés.</h2>
      <p className="reveal" style={{ fontSize: '0.82rem', color: 'var(--grey-2)', fontWeight: 300, lineHeight: 1.75, maxWidth: '40ch', marginBottom: '3.5rem' }}>
        Completá el formulario. Recibís una valoración real en menos de 24 horas. Sin sorteos. Sin letra chica.
      </p>

      <div className="reveal" style={{ maxWidth: '540px' }}>
        <div className="step-progress">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className={`progress-dot ${i <= currentStep ? 'done' : ''}`} />
          ))}
        </div>

        {/* STEP 1 */}
        {currentStep === 1 && (
          <div className="step active">
            <p className="step-num">01 / 04 — Modelo actual</p>
            <h3 className="step-title">¿Cuál es tu iPhone?</h3>
            <label className="form-label" htmlFor="currentModel">Modelo</label>
            <select className="form-select" id="currentModel" value={currentModel} onChange={e => setCurrentModel(e.target.value)}>
              <option value="">— Seleccioná tu modelo —</option>
              {MODELS.map(m => <option key={m}>{m}</option>)}
            </select>
            <label className="form-label" htmlFor="currentStorage">Almacenamiento</label>
            <select className="form-select" id="currentStorage" value={currentStorage} onChange={e => setCurrentStorage(e.target.value)}>
              <option value="">— Capacidad —</option>
              {STORAGES.map(s => <option key={s}>{s}</option>)}
            </select>
            <div className="step-nav"><span></span><button className="btn-step-next" onClick={nextStep}>Continuar</button></div>
          </div>
        )}

        {/* STEP 2 */}
        {currentStep === 2 && (
          <div className="step active">
            <p className="step-num">02 / 04 — Salud de batería</p>
            <h3 className="step-title">¿Cuánto retiene la batería?</h3>
            <label className="form-label">Salud de batería (Ajustes → Batería)</label>
            <div className="battery-num">{battery}%</div>
            <input type="range" min="60" max="100" value={battery} onChange={e => setBattery(Number(e.target.value))} />
            <p className="battery-guide">&gt; 85% Óptima · 75–85% Aceptable · &lt; 75% Reemplazo recomendado</p>
            <div className="step-nav">
              <button className="btn-step-back" onClick={prevStep}>Volver</button>
              <button className="btn-step-next" onClick={nextStep}>Continuar</button>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {currentStep === 3 && (
          <div className="step active">
            <p className="step-num">03 / 04 — Estado estético</p>
            <h3 className="step-title">¿Cómo está el exterior?</h3>
            <label className="form-label" htmlFor="aestheticCondition">Condición</label>
            <select className="form-select" id="aestheticCondition" value={aestheticCondition} onChange={e => setAestheticCondition(e.target.value)}>
              <option value="">— Seleccioná —</option>
              <option value="A">Grado A — Sin marcas visibles</option>
              <option value="B">Grado B — Marcas leves de uso</option>
              <option value="C">Grado C — Rayones / golpes visibles</option>
              <option value="D">Grado D — Pantalla rota / daño severo</option>
            </select>
            <label className="form-label" htmlFor="aestheticNotes">Detalles adicionales (opcional)</label>
            <textarea className="form-textarea" id="aestheticNotes" placeholder="Describí cualquier detalle: cámara, marco, botones..." value={aestheticNotes} onChange={e => setAestheticNotes(e.target.value)} />
            <div className="step-nav">
              <button className="btn-step-back" onClick={prevStep}>Volver</button>
              <button className="btn-step-next" onClick={nextStep}>Continuar</button>
            </div>
          </div>
        )}

        {/* STEP 4 */}
        {currentStep === 4 && (
          <div className="step active">
            <p className="step-num">04 / 04 — iPhone deseado</p>
            <h3 className="step-title">¿A qué modelo querés actualizar?</h3>
            <label className="form-label" htmlFor="desiredModel">Modelo deseado</label>
            <select className="form-select" id="desiredModel" value={desiredModel} onChange={e => setDesiredModel(e.target.value)}>
              <option value="">— Seleccioná —</option>
              {DESIRED_MODELS.map(m => <option key={m}>{m}</option>)}
            </select>
            <label className="form-label" htmlFor="contactName">Tu nombre</label>
            <input type="text" className="form-input" id="contactName" placeholder="Nombre completo" value={contactName} onChange={e => setContactName(e.target.value)} />
            
            <div id="summary-box" style={{ display: 'block' }}>
              <p style={{ color: 'var(--grey-3)', letterSpacing: '0.2em', fontSize: '0.45rem', marginBottom: '0.8rem', textTransform: 'uppercase' }}>// Resumen de tu solicitud</p>
              Modelo actual: {currentModel || 'No especificado'} {currentStorage || ''}<br />
              Salud batería: {battery}%<br />
              Condición: {aestheticCondition || 'No especificado'}<br />
              Detalles: {aestheticNotes || '—'}<br />
              Modelo deseado: {desiredModel || 'No especificado'}
            </div>

            <div className="step-nav">
              <button className="btn-step-back" onClick={prevStep}>Volver</button>
              <button className="btn-step-next" onClick={sendToWhatsApp} style={{ background: 'var(--white)', color: 'var(--black)' }}>
                Solicitar valoración
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

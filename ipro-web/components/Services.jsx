'use client'
import { useState } from 'react';

const SERVICES = [
  { idx: '01', name: 'Cambio de Batería', detail: 'Batería OEM / Compatible · Entrega en 24h' },
  { idx: '02', name: 'Cambio de Módulo', detail: 'Módulo original · Calibración táctil incluida' },
  { idx: '03', name: 'Cambio de Cámaras', detail: 'Lente / Sensor / Estabilizador' },
  { idx: '04', name: 'Micrófono - Parlante', detail: 'Reparación de audio integral' },
  { idx: '05', name: 'Pin de Carga', detail: 'Lightning / USB-C · Prueba de carga incluida' },
  { idx: '06', name: 'Software', detail: 'Diagnóstico · Backup · Actualizaciones' },
];

const ACCESSORIES = [
  { name: 'Funda MagSafe — Silicona premium', badge: 'Stock' },
  { name: 'Vidrio templado 2.5D — Antihuella', badge: 'Stock' },
  { name: 'Cargador USB-C 20W — Apple original', badge: 'Stock' },
  { name: 'Cable USB-C a Lightning — Trenzado', badge: 'Stock' },
  { name: 'AirPods Pro 2da gen — Sellados', badge: 'Consultar' },
];

export default function Services() {
  const [modalOpen, setModalOpen] = useState(false);
  const [wppService, setWppService] = useState('');
  const [wppModel, setWppModel] = useState('');
  const [wppIssue, setWppIssue] = useState('');
  const [wppLogistics, setWppLogistics] = useState('Lo acerco al local');

  const openWppForm = (service) => {
    setWppService(service);
    setWppModel('');
    setWppIssue('');
    setWppLogistics('Lo acerco al local');
    setModalOpen(true);
  };

  const closeWppForm = () => setModalOpen(false);

  const sendWpp = () => {
    const text = `Hola! Quiero pedir una cotización para:\n*Servicio*: ${wppService}\n*Modelo*: ${wppModel || 'No especificado'}\n*Falla*: ${wppIssue || 'Ninguno'}\n*Logística*: ${wppLogistics}`;
    window.open(`https://wa.me/5493515185799?text=${encodeURIComponent(text)}`, '_blank');
    closeWppForm();
  };

  return (
    <>
      <section id="servicios">
        <p className="section-label reveal">Servicios — Técnicos y Accesorios</p>
        <h2 className="section-title reveal">Servicio Técnico<br /><span className="dim">Especializado.</span></h2>
        <div className="services-grid reveal">
          {SERVICES.map(s => (
            <div key={s.idx} className="service-card" onClick={() => openWppForm(s.name)}>
              <div className="service-card-info">
                <span className="service-index">{s.idx}</span>
                <p className="service-name">{s.name}</p>
                <p className="service-detail">{s.detail}</p>
              </div>
              <button className="service-action-btn">Pedir Cotización</button>
            </div>
          ))}
        </div>
        <div className="reveal" style={{ marginTop: '4rem' }}>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--white)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            Accesorios Certificados<span style={{ display: 'block', flex: 1, height: '1px', background: 'var(--border)' }}></span>
          </h3>
          {ACCESSORIES.map((a, i) => (
            <div key={i} className="acc-item">
              <span className="acc-name">{a.name}</span>
              <span className="acc-badge">{a.badge}</span>
            </div>
          ))}
        </div>
      </section>

      {/* WPP MODAL */}
      <div className={`modal ${modalOpen ? 'active' : ''}`}>
        <div className="modal-content">
          <button className="modal-close" onClick={closeWppForm}>&times;</button>
          <h3 style={{ marginBottom: '1.5rem' }}>Pedir Cotización</h3>
          <div>
            <label className="wpp-label">Servicio Requerido</label>
            <input type="text" className="wpp-input" readOnly style={{ background: 'var(--surface2)' }} value={wppService} />
          </div>
          <div>
            <label className="wpp-label">Modelo de iPhone</label>
            <input type="text" className="wpp-input" placeholder="Ej: iPhone 13 Pro" value={wppModel} onChange={e => setWppModel(e.target.value)} />
          </div>
          <div>
            <label className="wpp-label">Detalle de Falla (opcional)</label>
            <input type="text" className="wpp-input" placeholder="Breve descripción" value={wppIssue} onChange={e => setWppIssue(e.target.value)} />
          </div>
          <div>
            <label className="wpp-label">Logística</label>
            <select className="wpp-input" value={wppLogistics} onChange={e => setWppLogistics(e.target.value)}>
              <option value="Lo acerco al local">Lo acerco al local</option>
              <option value="Necesito retiro/envío">Necesito retiro/envío</option>
            </select>
          </div>
          <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }} onClick={sendWpp}>Enviar a WhatsApp</button>
        </div>
      </div>
    </>
  );
}

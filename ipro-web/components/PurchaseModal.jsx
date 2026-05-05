'use client'
import { useState } from 'react';

export default function PurchaseModal({ isOpen, onClose, product }) {
  const [name, setName] = useState('');
  const [logistics, setLogistics] = useState('Servicio puerta a puerta');
  const [payment, setPayment] = useState('Cuotas');

  if (!isOpen) return null;

  const handleSend = () => {
    const text = `Hola! Quiero comprar este equipo:\n*Equipo*: ${product}\n*Nombre*: ${name || 'Sin nombre'}\n*Logística*: ${logistics}\n*Pago*: ${payment}`;
    window.open(`https://wa.me/5493515185799?text=${encodeURIComponent(text)}`, '_blank');
    onClose();
  };

  return (
    <div className="modal active">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h3 style={{ marginBottom: '1.5rem' }}>Comprar iPhone</h3>
        
        <div>
          <label className="wpp-label">Equipo</label>
          <input type="text" className="wpp-input" readOnly style={{ background: 'var(--surface2)' }} value={product} />
        </div>
        
        <div>
          <label className="wpp-label">Tu Nombre</label>
          <input type="text" className="wpp-input" placeholder="Nombre completo" value={name} onChange={e => setName(e.target.value)} />
        </div>
        
        <div>
          <label className="wpp-label">Logística</label>
          <select className="wpp-input" value={logistics} onChange={e => setLogistics(e.target.value)}>
            <option value="Servicio puerta a puerta">Servicio puerta a puerta</option>
            <option value="Retirar por el local">Retirar por el local</option>
          </select>
        </div>
        
        <div>
          <label className="wpp-label">Método de pago</label>
          <select className="wpp-input" value={payment} onChange={e => setPayment(e.target.value)}>
            <option value="Cuotas">Cuotas</option>
            <option value="USD">Dólares (USD)</option>
            <option value="Pesos">Pesos (ARS)</option>
          </select>
        </div>
        
        <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }} onClick={handleSend}>
          Confirmar Compra
        </button>
      </div>
    </div>
  );
}

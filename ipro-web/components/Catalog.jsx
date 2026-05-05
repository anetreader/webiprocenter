'use client'
import { useState } from 'react';
import PurchaseModal from './PurchaseModal';

const STOCK = [
  { type: "usados", model: "iPhone 13", storage: "128GB", color: "Midnight", battery: "86%", priceUSD: "$340", priceARS: "$482.800" },
  { type: "usados", model: "iPhone 13", storage: "128GB", color: "Green", battery: "86%", priceUSD: "$340", priceARS: "$482.800" },
  { type: "usados", model: "iPhone 14", storage: "128GB", color: "Midnight", battery: "90%", priceUSD: "$420", priceARS: "$596.400" },
  { type: "usados", model: "iPhone 14 Pro Max", storage: "128GB", color: "Space Black", battery: "100%", priceUSD: "$580", priceARS: "$823.600" },
  { type: "usados", model: "iPhone 15 Pro", storage: "128GB", color: "Blue", battery: "86%", priceUSD: "$610", priceARS: "$866.200" },
  { type: "usados", model: "iPhone 16 Pro", storage: "128GB", color: "Space Black", battery: "96%", priceUSD: "$800", priceARS: "$1.136.000" },
  { type: "usados", model: "iPhone 16 Pro Max", storage: "256GB", color: "Space Black", battery: "92%", priceUSD: "$950", priceARS: "$1.349.000" },
  { type: "nuevos", model: "iPhone 17", storage: "256GB", color: "Sellado", battery: "100%", priceUSD: "$940", priceARS: "$1.334.800" },
  { type: "nuevos", model: "iPhone 17 Pro", storage: "256GB", color: "Sellado", battery: "100%", priceUSD: "$1380", priceARS: "$1.959.600" },
  { type: "nuevos", model: "iPhone 17 Pro Max", storage: "256GB", color: "Sellado", battery: "100%", priceUSD: "$1490", priceARS: "$2.115.800" }
];

export default function Catalog() {
  const [filter, setFilter] = useState('usados');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const filteredStock = STOCK.filter(i => i.type === filter);

  const handlePurchase = (item) => {
    setSelectedProduct(`${item.model} - ${item.storage} - ${item.priceUSD} USD`);
    setModalOpen(true);
  };

  return (
    <>
      <section id="catalog">
        <p className="section-label reveal" style={{ textTransform: 'none' }}>Stock disponible actualizado en tiempo real</p>
        <h2 className="section-title reveal">Elegí tu<br /><span className="dim">próximo iPhone.</span></h2>
        
        <div className="catalog-filters reveal">
          <button className={`filter-btn ${filter === 'usados' ? 'active' : ''}`} onClick={() => setFilter('usados')}>Usados</button>
          <button className={`filter-btn ${filter === 'nuevos' ? 'active' : ''}`} onClick={() => setFilter('nuevos')}>Nuevos Sellados</button>
        </div>

        <div className="catalog-list reveal">
          {filteredStock.map((item, idx) => (
            <div key={idx} className="catalog-item">
              <div>
                <p className="item-model">{item.model}</p>
                <div className="item-specs">
                  <span className="item-spec-tag">{item.storage}</span>
                  <span className="item-spec-tag">{item.color}</span>
                  {item.type === 'usados' && <span className="item-spec-tag">Bat. {item.battery}</span>}
                </div>
              </div>
              <div>
                <div className="item-price-col">
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <span className="item-price" style={{ fontSize: '1.2rem', fontWeight: 800 }}>{item.priceUSD} USD</span>
                    <span className="item-price" style={{ fontSize: '0.75rem', fontWeight: 400, color: 'var(--grey-3)', marginTop: '0.2rem' }}>{item.priceARS} ARS</span>
                  </div>
                </div>
                <button className="btn-primary" style={{ width: '100%', textAlign: 'center' }} onClick={() => handlePurchase(item)}>Comprar</button>
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.45rem", letterSpacing: "0.15em", color: "var(--grey-3)", marginTop: "2.5rem", textTransform: "uppercase" }} className="reveal">
          * Precios en USD. Stock sujeto a disponibilidad. Actualización diaria.
        </p>
      </section>
      
      <PurchaseModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        product={selectedProduct} 
      />
    </>
  );
}

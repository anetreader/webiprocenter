export default function Footer() {
  return (
    <footer id="contacto">
      <div className="footer-grid reveal">
        <div className="footer-col">
          <p className="footer-col-title">Ubicación</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.0063266185845!2d-64.190825!3d-31.4139943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432987fb0727507%3A0xc6ebfb93a62024ce!2sGral.%20Sim%C3%B3n%20Bol%C3%ADvar%2030%2C%20X5000%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar"
            width="100%"
            height="180"
            style={{ border: 0, borderRadius: '4px', marginBottom: '1rem' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a href="https://maps.google.com/?q=Gral.+Simón+Bolívar+30,+Córdoba" target="_blank" rel="noopener noreferrer" style={{ marginBottom: '0.5rem', display: 'block' }}>
            Gral. Simón Bolívar 30<br />X5010 Córdoba<br />Argentina
          </a>
          <a className="footer-maps-link" href="https://maps.google.com/?q=Gral.+Simón+Bolívar+30,+Córdoba" target="_blank" rel="noopener noreferrer">Ver en Google Maps →</a>
        </div>
        <div className="footer-col">
          <p className="footer-col-title">Horarios</p>
          <p>Lun a Jue<br /><strong style={{ fontWeight: 500, color: 'var(--white)' }}>10:00 – 18:00</strong></p>
          <p style={{ marginTop: '0.5rem' }}>Viernes<br /><span style={{ color: 'var(--grey-3)' }}>Consultar</span></p>
          <p style={{ marginTop: '0.5rem' }}>Sáb / Dom<br /><span style={{ color: 'var(--grey-3)' }}>Cerrado</span></p>
        </div>
        <div className="footer-col">
          <p className="footer-col-title">Contacto</p>
          <a href="https://wa.me/5493515185799" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href="tel:03515185799">0351 518-5799</a>
          <a href="https://www.instagram.com/iprocenter.ar/" target="_blank" rel="noopener noreferrer">@iprocenter.ar</a>
        </div>
        <div className="footer-col">
          <p className="footer-col-title">Legal</p>
          <p>Empresa registrada en Argentina. Todos los precios en USD. Stock sujeto a disponibilidad. CUIT disponible a solicitud.</p>
        </div>
      </div>
      <div className="footer-bottom reveal">
        <span className="footer-copy">© 2025 iPro Center. Todos los derechos reservados.</span>
        <div className="footer-social">
          <a href="https://www.instagram.com/iprocenter.ar/" target="_blank" rel="noopener noreferrer">IG ↗</a>
        </div>
      </div>
    </footer>
  );
}

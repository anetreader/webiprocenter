export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-left">
        <p className="hero-eyebrow">Córdoba / Apple Specialist</p>
        <h1 className="hero-title">
          iPhone.<br />
          <span className="dim">Elegido</span><br />
          correctamente.
        </h1>
        <p className="hero-sub">Sin intermediarios. Sin incertidumbre. Equipos nuevos y usados con garantía, servicio técnico especializado y canje inteligente.</p>
        <div className="hero-cta-row">
          <a href="#catalog" className="btn-primary">Ver stock</a>
          <a href="#canje" className="btn-ghost">Cotizar mi iPhone</a>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-phones">
          <div className="phone-wrapper-17">
            <img className="phone-img-17" src="/IPHONE 17.png" alt="iPhone 17" />
          </div>
          <div className="phone-wrapper-16">
            <img className="phone-img-16" src="/IPHONE 16 PRO.png" alt="iPhone 16 Pro" />
          </div>
        </div>
      </div>
    </section>
  );
}

const fs = require('fs');
const path = '/Users/anet/Documents/ipro center/iphone-store.html';
let content = fs.readFileSync(path, 'utf8');

// 1. Logo replacement
content = content.replace(
  /<a href="#hero" class="nav-logo">SIGNAL<\/a>/g,
  '<a href="#hero" class="nav-logo"><img src="LOGO.jpg" alt="Signal Logo" style="height: 60px;"></a>'
);
content = content.replace(
  /<span class="footer-logo reveal">SIGNAL\.<\/span>/g,
  '<span class="footer-logo reveal" style="display:inline-block; margin-bottom: 3rem;"><img src="LOGO.jpg" alt="Signal Logo" style="height: 120px;"></span>'
);

// 2. Color replacement
content = content.replace(/--grey-3: #6B6B6B;/g, '--grey-3: #B0B0B0;');
content = content.replace(/--grey-4: #9A9A9A;/g, '--grey-4: #E0E0E0;');

// 3. Typography increase (rough increases using regex for typical values in this file)
content = content.replace(/font-size:\s*0\.45rem;/g, 'font-size: 0.6rem;');
content = content.replace(/font-size:\s*0\.5rem;/g, 'font-size: 0.65rem;');
content = content.replace(/font-size:\s*0\.55rem;/g, 'font-size: 0.75rem;');
content = content.replace(/font-size:\s*0\.6rem;/g, 'font-size: 0.8rem;');
content = content.replace(/font-size:\s*0\.65rem;/g, 'font-size: 0.85rem;');
content = content.replace(/font-size:\s*0\.75rem;/g, 'font-size: 0.95rem;');
content = content.replace(/font-size:\s*0\.8rem;/g, 'font-size: 1.05rem;');
content = content.replace(/font-size:\s*0\.82rem;/g, 'font-size: 1.05rem;');
content = content.replace(/font-size:\s*0\.85rem;/g, 'font-size: 1.1rem;');
content = content.replace(/font-size:\s*0\.9rem;/g, 'font-size: 1.15rem;');
content = content.replace(/font-size:\s*0\.95rem;/g, 'font-size: 1.2rem;');
content = content.replace(/font-size:\s*1rem;/g, 'font-size: 1.2rem;');
content = content.replace(/font-size:\s*1\.4rem;/g, 'font-size: 1.6rem;');
content = content.replace(/font-size:\s*1\.8rem;/g, 'font-size: 2rem;');
content = content.replace(/font-size:\s*2rem;/g, 'font-size: 2.2rem;');
content = content.replace(/font-size:\s*clamp\(3rem, 12vw, 7rem\);/g, 'font-size: clamp(3.5rem, 12vw, 8.5rem);');
content = content.replace(/font-size:\s*clamp\(2\.2rem, 8vw, 4rem\);/g, 'font-size: clamp(2.8rem, 8vw, 5rem);');

// 4. Hero section (Add images and CSS)
const heroCss = `
  .hero-images-container {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 5%;
    overflow: visible;
  }
  .hero-img {
    position: absolute;
    object-fit: contain;
    filter: drop-shadow(0 30px 60px rgba(0,0,0,0.6));
    /* Using transition for smooth parallax */
    transition: transform 0.1s ease-out;
    will-change: transform;
  }
  .img-1 {
    right: 5%;
    top: 50%;
    margin-top: -35vh; /* Center roughly */
    height: 70vh;
    z-index: 2;
  }
  .img-2 {
    right: 20%;
    top: 50%;
    margin-top: -30vh; /* Slightly offset */
    height: 60vh;
    z-index: 1;
    filter: drop-shadow(0 20px 40px rgba(0,0,0,0.8)) brightness(0.85);
  }
  @media (max-width: 768px) {
    .hero-images-container {
      justify-content: center;
      padding-right: 0;
      opacity: 0.3; /* Reduce opacity on mobile so text is legible */
    }
    .img-1 { right: 0; height: 60vh; }
    .img-2 { right: auto; left: 0; height: 50vh; }
  }
`;

content = content.replace('/* ---- SECTIONS SHARED ---- */', heroCss + '\n  /* ---- SECTIONS SHARED ---- */');

const heroHtml = `
  <div class="hero-bg"></div>
  <div class="hero-grid"></div>
  <div class="hero-images-container" id="heroImages">
    <img src="IPHONE 16 PRO.png" class="hero-img img-1" alt="iPhone 16 Pro" data-speed="0.04">
    <img src="IPHONE 17.png" class="hero-img img-2" alt="iPhone 17" data-speed="0.02">
  </div>
`;

content = content.replace(
  /<div class="hero-bg"><\/div>\s*<div class="hero-grid"><\/div>/,
  heroHtml
);

// Parallax script
const parallaxScript = `
// ==================== PARALLAX HERO ====================
document.addEventListener('mousemove', function(e) {
  const images = document.querySelectorAll('.hero-img');
  if (window.innerWidth < 768) return; // Disable complex parallax on mobile
  const x = (window.innerWidth - e.pageX) / 2;
  const y = (window.innerHeight - e.pageY) / 2;
  
  images.forEach(img => {
    const speed = img.getAttribute('data-speed');
    const xOffset = x * speed;
    const yOffset = y * speed;
    img.style.transform = \`translate(\${xOffset}px, \${yOffset}px)\`;
  });
});
`;

content = content.replace('// ==================== SCROLL REVEAL ====================', parallaxScript + '\n// ==================== SCROLL REVEAL ====================');


// 5. Catalog Texts
content = content.replace(
  /<p class="section-label reveal">Stock — Unidades disponibles<\/p>\s*<h2 class="section-title reveal">Catálogo<br><em style="font-style:italic; color: var\(--metallic\);">técnico\.<\/em><\/h2>/,
  `<p class="section-label reveal">Stock disponible actualizado en tiempo real</p>
  <h2 class="section-title reveal">Elegí tu<br><em style="font-style:italic; color: var(--metallic);">próximo iPhone.</em></h2>`
);

// 6. Accesorios Certificados Hierarchy
const oldAccesorios = `<p style="font-family:'Space Mono',monospace; font-size: 0.75rem; letter-spacing:0.35em; text-transform:uppercase; color:var(--grey-3); margin-bottom:1.5rem;">
      — Accesorios certificados
    </p>`;
// Note: font-size might have been replaced to 0.75rem in step 3
const newAccesorios = `<h3 style="font-family:'DM Serif Display',serif; font-size:clamp(2rem, 5vw, 3rem); margin-bottom:2.5rem; color:var(--white); line-height: 1.1;">
      Accesorios<br><em style="font-style:italic; color:var(--metallic);">certificados.</em>
    </h3>`;

// Try replacing both versions just in case the regex for font-size changed it or not.
content = content.replace(
  /<p style="font-family:'Space Mono',monospace; font-size:(0\.5rem|0\.65rem|0\.75rem); letter-spacing:0\.35em; text-transform:uppercase; color:var\(--grey-3\); margin-bottom:1\.5rem;">\s*— Accesorios certificados\s*<\/p>/,
  newAccesorios
);

fs.writeFileSync(path, content, 'utf8');
console.log("Modifications applied successfully.");

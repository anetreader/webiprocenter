import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Catalog from '../components/Catalog';
import Canje from '../components/Canje';
import Services from '../components/Services';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import WppFloat from '../components/WppFloat';
import ScrollReveal from '../components/ScrollReveal';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="rule"></div>
      <Catalog />
      <div className="rule"></div>
      <Canje />
      <div className="rule"></div>
      <Services />
      <div className="rule"></div>
      <Faq />
      <div className="rule"></div>
      <Footer />
      <WppFloat />
      <ScrollReveal />
    </>
  );
}

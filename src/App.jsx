import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Paintbrush, Code, PenTool } from 'lucide-react';

function App() {
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-pink)', minHeight: '100vh' }}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
            <img src="/luckyfox_pink.svg" alt="Lucky Fox Logo" style={{ width: '60px', height: '60px' }} />
            <span style={{ fontFamily: 'Abril Fatface', fontSize: '2rem', color: 'var(--text-dark)', letterSpacing: '1px' }}>
              Lucky Fox
            </span>
          </a>
          <div className="nav-links">
            <a href="#work" className="nav-link">Work</a>
            <a href="#shop" className="nav-link">Shop</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="btn btn-primary" style={{ marginLeft: '1rem' }}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--punchy-pink)', fontFamily: 'Space Grotesk', fontWeight: '600', fontSize: '1.2rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              <Sparkles size={20} /> Art & Design Studio
            </div>
            <h1 className="headline-hero">
              Art, Identity & <span style={{ color: 'var(--punchy-pink)' }}>Strange</span> Websites.
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-dark)', marginBottom: '3rem', maxWidth: '600px', fontWeight: '500' }}>
              Lucky Fox Studio creates logos, visual branding, small portfolio websites, and original artwork for people who hate boring.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a href="#work" className="btn btn-primary">View Work</a>
              <a href="#shop" className="btn btn-secondary">Shop Art</a>
              <a href="#contact" className="btn btn-outline" style={{ marginLeft: '1rem' }}>Work With Me <ArrowRight size={20} /></a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="work" className="section container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}>
          <h2 style={{ fontSize: '4.5rem', marginBottom: '4rem', textAlign: 'center', color: 'var(--text-dark)' }}>
            Selected <span className="text-mint" style={{ textShadow: '2px 2px 0 var(--charcoal)' }}>Curiosities</span>
          </h2>
        </motion.div>
        
        <motion.div className="gallery-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          {/* Work Item 1 */}
          <motion.div className="art-card" variants={fadeIn}>
            <div className="art-image-placeholder" style={{ backgroundColor: 'var(--mint-green)', color: 'var(--charcoal)' }}>Logo Design</div>
            <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>The Alchemist's Brew</h3>
            <p style={{ color: 'var(--punchy-pink)', fontSize: '1.1rem', fontWeight: '600', textTransform: 'uppercase' }}>Branding & Illustration</p>
          </motion.div>
          {/* Work Item 2 */}
          <motion.div className="art-card" variants={fadeIn}>
            <div className="art-image-placeholder" style={{ backgroundColor: 'var(--punchy-pink)', color: 'var(--card-bg)' }}>Portfolio Website</div>
            <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>Evelyn's Gallery</h3>
            <p style={{ color: 'var(--charcoal)', fontSize: '1.1rem', fontWeight: '600', textTransform: 'uppercase' }}>Web Design & Development</p>
          </motion.div>
          {/* Work Item 3 */}
          <motion.div className="art-card" variants={fadeIn}>
            <div className="art-image-placeholder" style={{ backgroundColor: 'var(--charcoal)', color: 'var(--card-bg)' }}>Digital Art</div>
            <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>Midnight Circus</h3>
            <p style={{ color: 'var(--punchy-pink)', fontSize: '1.1rem', fontWeight: '600', textTransform: 'uppercase' }}>Pop-Surrealist Painting</p>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="section container">
        <div className="asymmetric-grid">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} style={{ position: 'relative' }}>
            <img src="/luckyfox_pink.svg" alt="Lucky Fox" style={{ width: '100%', maxWidth: '450px', filter: 'drop-shadow(15px 15px 0 var(--mint-green))' }} />
          </motion.div>
          <motion.div className="about-box" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 style={{ fontSize: '4rem', marginBottom: '2rem', textTransform: 'uppercase' }}>The Studio</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', lineHeight: '1.8' }}>
              Lucky Fox Studio is a small creative studio focused on visual identity, digital design, and original artwork. 
              The style blends pop surrealism, lowbrow art, vintage influence, and clean digital design.
            </p>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
              I offer simple, thoughtful design for small businesses and individuals who want something clean, functional, and well put together—with just the right amount of weirdness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section container" style={{ borderTop: '4px solid var(--charcoal)', marginTop: '4rem' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '4.5rem', color: 'var(--text-dark)' }}>Design Services</h2>
          <p style={{ fontSize: '1.3rem', color: 'var(--punchy-pink)', marginTop: '1rem', fontFamily: 'Space Grotesk', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px' }}>
            Design with teeth, charm, and a little mischief.
          </p>
        </motion.div>

        <motion.div className="gallery-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div className="service-card" variants={fadeIn}>
            <PenTool size={48} color="var(--punchy-pink)" style={{ marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '2.5rem', color: 'var(--text-dark)' }}>Logo Design</h3>
            <div className="service-price">Starting at $250</div>
            <ul style={{ listStyle: 'none', marginTop: '2rem', color: 'var(--charcoal)', fontSize: '1.1rem', fontWeight: '500' }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{color:'var(--mint-green)'}}>■</span> 1–2 initial concepts</li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{color:'var(--mint-green)'}}>■</span> 1 round of revisions</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{color:'var(--mint-green)'}}>■</span> Final logo files</li>
            </ul>
          </motion.div>

          <motion.div className="service-card" variants={fadeIn} style={{ borderTopColor: 'var(--mint-green)' }}>
            <Paintbrush size={48} color="var(--mint-green)" style={{ marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '2.5rem', color: 'var(--text-dark)' }}>Brand Starter</h3>
            <div className="service-price" style={{ color: 'var(--mint-green)', textShadow: '1px 1px 0 var(--charcoal)' }}>Starting at $500</div>
            <ul style={{ listStyle: 'none', marginTop: '2rem', color: 'var(--charcoal)', fontSize: '1.1rem', fontWeight: '500' }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{color:'var(--punchy-pink)'}}>■</span> Complete logo design</li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{color:'var(--punchy-pink)'}}>■</span> Color & typography palette</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{color:'var(--punchy-pink)'}}>■</span> Basic brand sheet (PDF)</li>
            </ul>
          </motion.div>

          <motion.div className="service-card" variants={fadeIn} style={{ borderTopColor: 'var(--charcoal)' }}>
            <Code size={48} color="var(--charcoal)" style={{ marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '2.5rem', color: 'var(--text-dark)' }}>Websites</h3>
            <div className="service-price" style={{ color: 'var(--charcoal)' }}>Starting at $750</div>
            <ul style={{ listStyle: 'none', marginTop: '2rem', color: 'var(--charcoal)', fontSize: '1.1rem', fontWeight: '500' }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{color:'var(--punchy-pink)'}}>■</span> Portfolio or Small Business</li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{color:'var(--punchy-pink)'}}>■</span> 3–5 custom pages</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{color:'var(--punchy-pink)'}}>■</span> Mobile-friendly & SEO basics</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="section container" style={{ paddingBottom: '10rem' }}>
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeIn}
          style={{
            background: 'var(--charcoal)',
            color: 'var(--card-bg)',
            padding: '6rem 4rem',
            textAlign: 'center',
            border: '4px solid var(--mint-green)',
            boxShadow: '16px 16px 0 var(--punchy-pink)'
          }}
        >
          <h2 style={{ fontSize: '5rem', color: 'var(--card-bg)', marginBottom: '2rem', textTransform: 'uppercase' }}>
            Let's make something <span className="text-mint">weird.</span>
          </h2>
          <p style={{ fontSize: '1.4rem', maxWidth: '700px', margin: '0 auto 4rem auto', color: 'var(--card-bg)', fontWeight: '300' }}>
            Interested in working together or buying some art? Send me a message with a short description of what you’re looking for and I’ll let you know if it’s a good fit.
          </p>
          <a href="mailto:hello@luckyfox.studio" className="btn btn-primary" style={{ padding: '1.5rem 4rem', fontSize: '1.3rem' }}>
            Get in Touch
          </a>
        </motion.div>
      </section>
    </div>
  );
}

export default App;

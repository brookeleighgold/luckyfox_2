import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Paintbrush, Code, PenTool, ExternalLink } from 'lucide-react';

function App() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh' }}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
            <img src="/luckyfox_pink.svg" alt="Lucky Fox Logo" style={{ width: '50px', height: '50px' }} />
            <span style={{ fontFamily: 'Cormorant Garamond', fontSize: '1.8rem', fontWeight: '700', color: 'var(--burgundy)', letterSpacing: '1px' }}>
              Lucky Fox Studio
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
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--dusty-pink)', fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: '1.2rem', marginBottom: '1rem' }}>
              <Sparkles size={18} /> Art & Design Studio
            </div>
            <h1 className="headline-hero">
              Art, identity, and strange little websites.
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--charcoal)', marginBottom: '2.5rem', maxWidth: '600px' }}>
              Lucky Fox Studio creates logos, visual branding, small portfolio websites, and original artwork for people who want something with personality.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#work" className="btn btn-primary">View Work</a>
              <a href="#shop" className="btn btn-secondary">Shop Art</a>
              <a href="#contact" className="btn btn-outline" style={{ marginLeft: '1rem' }}>Work With Me <ArrowRight size={16} /></a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="work" className="section container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}>
          <h2 style={{ fontSize: '3.5rem', marginBottom: '3rem', textAlign: 'center', color: 'var(--burgundy)' }}>Selected Curiosities</h2>
        </motion.div>
        
        <motion.div className="gallery-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          {/* Work Item 1 */}
          <motion.div className="art-card" variants={fadeIn}>
            <div className="art-image-placeholder" style={{ background: 'var(--moss-green)' }}>Logo Design</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>The Alchemist's Brew</h3>
            <p style={{ color: 'var(--dusty-pink)', fontSize: '0.9rem', marginBottom: '1rem' }}>Branding & Illustration</p>
          </motion.div>
          {/* Work Item 2 */}
          <motion.div className="art-card" variants={fadeIn}>
            <div className="art-image-placeholder" style={{ background: 'var(--charcoal)' }}>Portfolio Website</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Evelyn's Gallery</h3>
            <p style={{ color: 'var(--dusty-pink)', fontSize: '0.9rem', marginBottom: '1rem' }}>Web Design & Development</p>
          </motion.div>
          {/* Work Item 3 */}
          <motion.div className="art-card" variants={fadeIn}>
            <div className="art-image-placeholder" style={{ background: 'var(--burgundy)' }}>Digital Art</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Midnight Circus</h3>
            <p style={{ color: 'var(--dusty-pink)', fontSize: '0.9rem', marginBottom: '1rem' }}>Pop-Surrealist Painting</p>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="section container">
        <div className="asymmetric-grid">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} style={{ position: 'relative' }}>
            <img src="/luckyfox_pink.svg" alt="Lucky Fox" style={{ width: '100%', maxWidth: '400px', filter: 'drop-shadow(10px 10px 0 var(--dusty-pink))' }} />
          </motion.div>
          <motion.div className="about-box" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>The Studio</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              Lucky Fox Studio is a small creative studio focused on visual identity, digital design, and original artwork. 
              The style blends pop surrealism, lowbrow art, vintage influence, and clean digital design.
            </p>
            <p style={{ fontSize: '1.1rem' }}>
              I offer simple, thoughtful design for small businesses and individuals who want something clean, functional, and well put together—with just the right amount of weirdness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section container" style={{ borderTop: '1px solid rgba(31, 26, 23, 0.1)', marginTop: '4rem' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3.5rem', color: 'var(--charcoal)' }}>Design Services</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--dusty-pink)', marginTop: '1rem' }}>Design with teeth, charm, and a little mischief.</p>
        </motion.div>

        <motion.div className="gallery-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div className="service-card" variants={fadeIn}>
            <PenTool size={32} color="var(--pink)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '2rem' }}>Logo Design</h3>
            <div className="service-price">Starting at $250</div>
            <ul style={{ listStyle: 'none', marginTop: '1.5rem', color: 'var(--charcoal)' }}>
              <li style={{ marginBottom: '0.8rem' }}>• 1–2 initial concepts</li>
              <li style={{ marginBottom: '0.8rem' }}>• 1 round of revisions</li>
              <li>• Final logo files</li>
            </ul>
          </motion.div>

          <motion.div className="service-card" variants={fadeIn} style={{ borderTopColor: 'var(--burgundy)' }}>
            <Paintbrush size={32} color="var(--burgundy)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '2rem' }}>Brand Starter</h3>
            <div className="service-price">Starting at $500</div>
            <ul style={{ listStyle: 'none', marginTop: '1.5rem', color: 'var(--charcoal)' }}>
              <li style={{ marginBottom: '0.8rem' }}>• Complete logo design</li>
              <li style={{ marginBottom: '0.8rem' }}>• Color & typography palette</li>
              <li>• Basic brand sheet (PDF)</li>
            </ul>
          </motion.div>

          <motion.div className="service-card" variants={fadeIn} style={{ borderTopColor: 'var(--moss-green)' }}>
            <Code size={32} color="var(--moss-green)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '2rem' }}>Websites</h3>
            <div className="service-price">Starting at $750</div>
            <ul style={{ listStyle: 'none', marginTop: '1.5rem', color: 'var(--charcoal)' }}>
              <li style={{ marginBottom: '0.8rem' }}>• Portfolio or Small Business</li>
              <li style={{ marginBottom: '0.8rem' }}>• 3–5 custom pages</li>
              <li>• Mobile-friendly & SEO basics</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="section container" style={{ paddingBottom: '8rem' }}>
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeIn}
          style={{
            background: 'var(--charcoal)',
            color: 'var(--cream)',
            padding: '5rem 3rem',
            textAlign: 'center',
            border: '1px solid var(--gold)',
            boxShadow: '12px 12px 0 var(--pink)'
          }}
        >
          <h2 style={{ fontSize: '4rem', color: 'var(--cream)', marginBottom: '1.5rem' }}>Let's make something weird.</h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 3rem auto', color: 'var(--cream)' }}>
            Interested in working together or buying some art? Send me a message with a short description of what you’re looking for and I’ll let you know if it’s a good fit.
          </p>
          <a href="mailto:hello@luckyfox.studio" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.2rem' }}>
            Get in Touch
          </a>
        </motion.div>
      </section>
    </div>
  );
}

export default App;

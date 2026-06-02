const services = [
  {
    title: "Residential HVAC",
    description:
      "Service, repair, replacement, and seasonal support for homeowners who need fast, dependable comfort solutions.",
  },
  {
    title: "Commercial HVAC",
    description:
      "Installation, service, troubleshooting, and replacement solutions for commercial buildings and facilities.",
  },
  {
    title: "Industrial Mechanical",
    description:
      "Mechanical systems support for industrial spaces, including larger equipment, controls, and project execution.",
  },
  {
    title: "Controls & Automation",
    description:
      "Building automation, controls support, and system optimization to improve performance and reliability.",
  },
  {
    title: "Preventive Maintenance",
    description:
      "Service plans designed to reduce downtime, extend equipment life, and catch problems before they grow.",
  },
];

const highlights = [
  "Licensed mechanical contractor in Tennessee",
  "Residential, commercial, and industrial service capability",
  "Hands-on service, repair, and system troubleshooting",
  "Built to generate cash flow now and scale up over time",
];

const actions = [
  {
    title: "Book Service",
    description:
      "Connect this button to Housecall Pro or Jobber online booking when you are ready.",
  },
  {
    title: "Request Estimate",
    description:
      "Use a simple lead form now, then route it into your CRM later for faster follow-up.",
  },
  {
    title: "Financing Options",
    description:
      "Add a financing page or partner link for larger replacements and commercial projects.",
  },
  {
    title: "Customer Portal",
    description:
      "Send customers to invoices, payments, job updates, and account history through your CRM.",
  },
];

const projectTypes = [
  "Rooftop units and split systems",
  "Boilers, chillers, and refrigeration equipment",
  "Mechanical upgrades and replacements",
  "Building automation and controls support",
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <div className="container nav-row">
          <div>
            <div className="brand-name">MATRIX</div>
            <div className="brand-subtitle">Mechanical Contractor</div>
          </div>

          <nav className="site-nav">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="button button-gold" href="#contact">
            Book Now
          </a>
        </div>
      </header>

      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <div className="pill">Licensed • Professional • Performance-Driven</div>
            <h1>
              Mechanical systems built for <span>reliability</span>.
            </h1>
            <p className="hero-copy">
              Matrix delivers residential, commercial, and industrial HVAC and
              mechanical solutions with a focus on clean execution, system
              performance, and dependable service. The site is built to start
              simple now and connect later to tools like Housecall Pro or Jobber.
            </p>

            <div className="hero-buttons">
              <a className="button button-gold" href="#contact">
                Request Estimate
              </a>
              <a className="button button-dark" href="#contact">
                Customer Portal
              </a>
            </div>

            <div className="highlight-grid">
              {highlights.map((item) => (
                <div key={item} className="highlight-card">
                  <span className="checkmark">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-panel-inner">
              <div className="hero-panel-header">
                <div>
                  <div className="panel-brand">Matrix</div>
                  <div className="panel-subtitle">Mechanical Contractor</div>
                </div>
                <div className="badge-box">★</div>
              </div>

              <div className="hero-panel-card">
                <div className="eyebrow">Core Focus</div>
                <div className="panel-title">
                  Residential HVAC • Commercial HVAC • Industrial Mechanical
                </div>
              </div>

              <div className="mini-grid">
                <div className="hero-panel-card">
                  <div className="eyebrow">Approach</div>
                  <div className="mini-title">Engineered execution</div>
                </div>
                <div className="hero-panel-card">
                  <div className="eyebrow">Priority</div>
                  <div className="mini-title">Reliable performance</div>
                </div>
              </div>

              <div className="accent-card">
                Built for a professional service company that wants to look
                established, industrial, and premium.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow gold">Services</div>
            <h2>What Matrix does</h2>
            <p>
              Clear service categories that let you bring in residential revenue
              now while still positioning Matrix for bigger long-term
              opportunities.
            </p>
          </div>

          <div className="card-grid five-up">
            {services.map((service) => (
              <article key={service.title} className="info-card">
                <div className="icon-box">■</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint" id="about">
        <div className="container two-column">
          <div>
            <div className="eyebrow gold">About</div>
            <h2>A stronger first impression for your business.</h2>
            <p>
              This starter site is designed to position Matrix as a serious
              mechanical contractor with a premium, industrial feel while still
              supporting residential work that helps drive revenue today.
            </p>
            <p>
              The layout is intentionally clean so you can market residential
              services now, then shift the focus more heavily toward commercial
              and industrial work as the business grows.
            </p>
          </div>

          <div className="boxed-list">
            <h3>Why this works</h3>
            <div className="stack-list">
              <div>Looks more established than a simple social media page</div>
              <div>Explains your services in a clear way</div>
              <div>
                Creates trust with homeowners now and larger commercial or
                industrial clients later
              </div>
              <div>Easy to expand into a full business website later</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading wide">
            <div className="eyebrow gold">Customer Journey</div>
            <h2>Simple now. Built to scale later.</h2>
            <p>
              Start with the customer actions your business needs most today,
              then connect each one to Housecall Pro, Jobber, financing
              partners, or your own future internal tools.
            </p>
          </div>

          <div className="card-grid four-up">
            {actions.map((item) => (
              <article key={item.title} className="info-card">
                <div className="pill small">Website Action</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="gold small-label">Integration ready</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="capabilities">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow gold">Capabilities</div>
            <h2>Project and equipment focus</h2>
            <p>
              This section helps potential clients understand the kind of work
              you handle.
            </p>
          </div>

          <div className="two-panel-grid">
            <div className="dark-panel">
              <h3>Typical work areas</h3>
              <div className="stack-list">
                {projectTypes.map((item) => (
                  <div key={item} className="highlight-card">
                    <span className="checkmark">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="gold-panel">
              <h3>Future upgrades you can add</h3>
              <div className="stack-list">
                <div>Housecall Pro or Jobber booking integration</div>
                <div>Lead form connected to your email or CRM</div>
                <div>Residential tune-up offers and maintenance plans</div>
                <div>
                  Financing page, customer portal, reviews, and future
                  commercial case studies
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-bottom" id="contact">
        <div className="container">
          <div className="contact-panel">
            <div>
              <div className="eyebrow gold">Contact</div>
              <h2>Ready to launch matrixmechco.com?</h2>
              <p>
                This page is set up as a clean starting point. You can now
                customize the wording, add your logo, change photos, and connect
                the buttons to your real phone, email, estimate form, Housecall
                Pro booking link, or Jobber client portal.
              </p>
            </div>

            <div className="contact-list">
              <div className="contact-item">📞 901-509-5052</div>
              <div className="contact-item">✉️ awoodley67@gmail.com</div>
              <div className="contact-item">📍 Memphis, Tennessee</div>
              <div className="contact-item">🌐 matrixmechco.com</div>
              <a className="button button-gold full-width" href="mailto:awoodley67@gmail.com">
                Book an Estimate
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

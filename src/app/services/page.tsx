import "@styles/services.css";

const services = [
  {
    icon: "�",
    title: "Project Management",
    description:
      "I can lead the entire project lifecycle from the first discussion and requirements gathering to delivery, deployment, and long-term support.",
    points: [
      "Project planning",
      "Requirement engineering",
      "Scope and timeline alignment",
      "Stakeholder communication",
    ],
  },
  {
    icon: "⚙️",
    title: "Development & Architecture",
    description:
      "I design and build solutions from concept to production with a strong focus on software architecture, maintainability, and scalable engineering.",
    points: [
      "Software architecture",
      "Docker containers",
      "AI integrations",
      "IoT and smart systems",
      "Smart home solutions",
    ],
  },
  {
    icon: "🚀",
    title: "Deploy & Support",
    description:
      "I handle the full release cycle, including deployment, optimization, monitoring, and continuous support after launch.",
    points: [
      "Deployment",
      "Support",
      "Maintaining production systems",
      "Continuous improvement",
    ],
  },
];

export default function Services() {
  return (
    <section className="section-page">
      <div className="page-shell">
        <h1 className="page-heading">Services</h1>
        <span className="page-divider"></span>
        <p className="page-intro">
          I am a product engineer and can handle everything from A to Z — from
          project definition and requirements to development, deployment, and
          ongoing support.
        </p>

        <div className="card-grid">
          {services.map((service) => (
            <article key={service.title} className="info-card">
              <div className="card-icon" aria-hidden="true">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

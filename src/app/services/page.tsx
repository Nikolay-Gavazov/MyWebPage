import "@styles/services.css";

const services = [
  {
    number: "01",
    title: "Product Management",
    description:
      "From the first conversation to a clear plan, I guide the work around the product's goals, scope, and delivery.",
    points: [
      "Project management",
      "Requirement engineering",
      "Project discovery and scope",
      "Planning and coordination",
    ],
  },
  {
    number: "02",
    title: "Development & Architecture",
    description:
      "I turn requirements into maintainable software, choosing an architecture and technologies that fit the product.",
    points: [
      "Product development",
      "Software architecture",
      "Docker and container technologies",
      "AI integrations",
    ],
  },
  {
    number: "03",
    title: "Deploy & Support",
    description:
      "I take the product through release and stay involved after launch, including connected and smart systems.",
    points: [
      "Deployment",
      "Ongoing support and maintenance",
      "IoT and smart home systems",
      "Production improvements",
    ],
  },
];

export default function Services() {
  return (
    <section className="section-page">
      <div className="page-shell">
        <h1 className="page-heading">Services</h1>
        <span className="page-divider" aria-hidden="true"></span>
        <p className="page-intro">
          I am a product engineer and can handle everything from A to Z — from
          project definition and requirements to development, deployment, and
          ongoing support.
        </p>

        <div className="card-grid">
          {services.map((service) => (
            <article key={service.title} className="info-card">
              <div className="card-icon" aria-hidden="true">
                {service.number}
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

import "@styles/contacts.css";

const contactMethods = [
  {
    title: "Email",
    value: "nikolay.gavazov1@gmail.com",
    href: "mailto:nikolay.gavazov1@gmail.com",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/nikolay-gavazov",
    href: "https://www.linkedin.com",
  },
  {
    title: "Location",
    value: "Bulgaria / Remote",
    href: "#",
  },
];

export default function Contacts() {
  return (
    <section className="section-page">
      <div className="page-shell">
        <h1 className="page-heading">Contact</h1>
        <span className="page-divider"></span>
        <p className="page-intro">
          Let&apos;s talk about your next idea, project, or digital challenge. I&apos;m
          always open to new opportunities and meaningful collaborations.
        </p>

        <div className="contact-layout">
          <div className="contact-form">
            <h3>Send a message</h3>
            <form className="form-grid">
              <div className="input-field">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Your name" />
              </div>

              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="Your email" />
              </div>

              <div className="input-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project"
                />
              </div>

              <button type="submit" className="submit-button">
                Send message
              </button>
            </form>
          </div>

          <div className="contact-list">
            {contactMethods.map((method) => (
              <div key={method.title} className="contact-method">
                <h4>{method.title}</h4>
                {method.href !== "#" ? (
                  <a href={method.href} target="_blank" rel="noreferrer">
                    {method.value}
                  </a>
                ) : (
                  <p>{method.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
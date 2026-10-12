"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import "@styles/contacts.css";

const contactEmail = "nikolay.gavazov1@gmail.com";

const contactMethods = [
  {
    title: "Email",
    value: "nikolay.gavazov1@gmail.com",
    href: "mailto:nikolay.gavazov1@gmail.com",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/nikolay-gavazov-484062155",
    href: "https://www.linkedin.com/in/nikolay-gavazov-484062155/",
  },
  {
    title: "Location",
    value: "Bulgaria / Remote",
    href: "#",
  },
];

export default function Contacts() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });

      if (!response.ok) {
        throw new Error("Message could not be sent.");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="section-page">
      <div className="page-shell">
        <h1 className="page-heading">Contact</h1>
        <span className="page-divider" aria-hidden="true"></span>
        <p className="page-intro">
          Let&apos;s talk about your next idea, project, or digital challenge. I&apos;m
          always open to new opportunities and meaningful collaborations.
        </p>

        <div className="contact-layout">
          <div className="contact-form">
            <h3>Send a message</h3>
            <form className="form-grid" onSubmit={handleSubmit}>
              <div className="form-trap" aria-hidden="true">
                <label htmlFor="website">Leave this field empty</label>
                <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="input-field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" autoComplete="name" placeholder="Your name" required />
              </div>

              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" placeholder="Your email" required />
              </div>

              <div className="input-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project"
                  required
                />
              </div>

              <button type="submit" className="submit-button" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send message"}
              </button>

              <p
                id="form-status"
                className="form-status"
                data-state={status}
                role="status"
                aria-live="polite"
              >
                {status === "success" && "Message sent. Thanks for getting in touch."}
                {status === "error" && (
                  <>
                    Message not sent. Please try again or email{" "}
                    <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
                  </>
                )}
              </p>
            </form>
          </div>

          <div className="contact-list">
            {contactMethods.map((method) => (
              <div key={method.title} className="contact-method">
                <h4>{method.title}</h4>
                {method.href !== "#" ? (
                  <a
                    href={method.href}
                    target={method.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={method.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  >
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
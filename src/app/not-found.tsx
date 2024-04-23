import { Fira_Mono } from "next/font/google";
import Link from "next/link";
import "@styles/notFound.css";

const fira_mono = Fira_Mono({ weight: "400", subsets: ["latin", "cyrillic"] });

export default function NotFound() {
  return (
    <main className="notFoundMain">
      <section className={fira_mono.className}>
        <article className="notFound" title="404">
          404
        </article>
        <article className="notFoundText" title="Page Not Found">
          Page Not Found
        </article>
        <div className="link">
          <Link href="/">Return Home</Link>
        </div>
      </section>
    </main>
  );
}

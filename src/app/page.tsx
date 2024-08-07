export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
      <section className="welcome flex h-full flex-col items-center justify-between">
        <article className="box">
          <div className="title">
            <span className="block"></span>
            <h1>
              I'm Nikolay Gavazov<span></span>
            </h1>
          </div>

          <div className="role">
            <div className="block"></div>
            <p>Full Stack Web Developer</p>
          </div>
        </article>
      </section>
    </>
  );
}

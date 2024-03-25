import Image from "next/image";

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between">
    <section className="welcome">
    <article className="box">
        <div className="title">
            <span className="block"></span>
            <h1>I'm Nikolay Gavazov<span></span></h1>
        </div>

        <div className="role">
            <div className="block"></div>
            <p>Full Stack Web Developer</p>
        </div>
    </article>
    </section>
    
    </main>
    <div>
    <div id='stars'></div>
    <div id='stars2'></div>
    <div id='stars3'></div>
    </div>
    </>
  );
}

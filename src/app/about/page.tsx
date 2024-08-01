import Image from "next/image";

export default function about() {
  return (
    <>
      {/* <header className="title flex flex-col items-center mb-5">
        <h2 className="text-[#ffb000] text-4xl mb-1">About</h2>
        <span className="w-24 h-1 bg-[#ffb000]"></span>
    </header> */}
      <section className="mt-24">
        <div className="flex justify-center gap-36">
          <div className="image-wrapper h-80 w-80  relative">
            <div className="image-border h-80 w-80 absolute top-8 left-8 border-8 rounded-xl -z-50 border-[#ffb000]"></div>
            <div className="h-80 w-80 overflow-hidden rounded-xl">
            <Image
              className="opacity-100"
              width={320}
              height={320}
              src="/assets/images/IMG_0240.jpg"
              alt="Nikolay Gavazov"
              />
              </div>
          </div>
          <section className="max-w-2xl">
            <header className="title flex flex-col items-center">
              <h2 className="text-[#ffb000] text-4xl mb-1">About Me</h2>
              <span className="w-40 h-1 bg-[#ffb000]"></span>
            </header>
            <main>
          <p className="text-white mt-5 ">
            Hey there! I'm Nikolay, a passionate software web developer with a
            knack for crafting innovative digital solutions.I find my
            inspiration in the dynamic world of technology and the boundless
            opportunities it offers.
          </p>
          <h3>A Bit About My Journey</h3>
          <p>
            Originally from Bulgaria, I've always been fascinated by the
            intersection of mechanics and software. With a background in
            Mechanical Engineering, I've honed my skills to marry the precision
            of engineering with the creativity of web development.
          </p>
          <h3>My Passions</h3>
          <p>
            When I'm not immersed in lines of code, you'll likely find me
            indulging in my hobbies. I have a deep love for cars, often spending
            my weekends tinkering under the hood or hitting the open road.
            Football matches are a must-watch for me, and I never say no to a
            thrilling off-road adventure or a karting session.
          </p>
          <h3>My Toolbox</h3>
          <p>
            In my arsenal, I wield a variety of tools and technologies. From
            React, Next.js and Angular to Node.js and Express.js, I thrive on
            the versatility of frameworks and languages like TypeScript and
            Vanilla JavaScript. I'm adept at handling databases like MongoDB and
            SQL Server, and I streamline my development process with tools like
            Postman and GitHub. When it comes to design, I turn to Figma to
            bring my ideas to life, and for mobile app development, I rely on
            Ionic.
          </p>
          <h3>Experience Beyond Borders</h3>
          <p>
            With fluency in both English and German, I've had the privilege of
            working on projects that span across cultures and continents. My
            diverse experiences have not only enriched my skill set but also
            broadened my perspective on problem-solving and collaboration.
          </p>
          <h3>Let's Connect</h3>
          <p>
            Whether you're looking to build a sleek web application, tackle a
            complex software challenge, or simply chat about cars and travel,
            I'm always up for a stimulating conversation. Feel free to reach out
            and let's embark on this exciting journey together!
          </p>
        </main>
          </section>
        </div>
      </section>
    </>
  );
}

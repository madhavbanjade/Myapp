const About = () => {
  return (
    <div className="py-24 px-6 lg:px-24 text-center lg:text-left">
      <div
        data-aos="fade-right"
        className="flex flex-col lg:flex-row items-center justify-between gap-12"
      >
        {/* Text Content */}
        <div data-aos="fade-left" className="w-full max-w-3xl space-y-6">
          <h1 className="text-3xl lg:text-4xl font-semibold leading-snug">
            Need a{" "}
            <span className="uppercase ">Creative</span> Product?{" "}
            <br className="hidden lg:block" />
            I Can Help You!
          </h1>

          <p className="text-md  leading-relaxed">
            My journey in web development has been fueled by a love for
            problem-solving and creating impactful user experiences. I thrive on
            turning ideas into robust, scalable applications—whether it's
            developing dynamic front-end interfaces or implementing efficient
            back-end systems.
            <br />
            <br />
            Beyond coding, I’m also passionate about <strong>DIGITAL MARKETING</strong>,
            <strong> SEO</strong>, and much more. Let’s get in touch—and I’ll tell you
            more over a cup of coffee. <span className="text-blue-500">Coffee’s on me 😊</span>
          </p>

          <div className="pt-2">
            <a
              href="/Madhav Banjade.pdf"
              download="MadhavBanjade.pdf"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded-lg uppercase font-semibold tracking-wide transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

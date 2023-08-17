import beach from "../images/beach.jpeg";

const About = () => {
  return (
    <section className="section" id="about">
      {/* title */}
      <div className="section-title">
        <h2>
          about <span>us</span>
        </h2>
      </div>
      {/* center */}
      <div className="section-center about-center">
        <div className="about-img-container">
          <img src={beach} alt="awesome beach" className="about-img" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          {/* #top 為內建的錨點，可以直接使用，會到網頁的頂部 */}
          <a href="#top" className="btn about-btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;

import React from "react";

const Hero = () => {
  return (
    // 加上 id="home"，配合 <a> 的 href="#home"，點下去就會到該區塊
    <section className="hero" id="home">
      <div className="hero-banner">
        <h1>continue exploring</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          explicabo debitis est autem dicta.
        </p>
        <a href="#tours" className="btn hero-btn">
          explore tours
        </a>
      </div>
    </section>
  );
};

export default Hero;

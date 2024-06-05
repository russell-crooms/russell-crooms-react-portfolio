import "./Hero.css";
import russell_hero_image from "../../assets/russell-hero-image.png";

const Hero = () => {
  return (
    <div className="hero">
      <img src={russell_hero_image} alt="" />
      <h1><span>I'm Russell Crooms,</span> Frontend Developer based in Texas, USA.</h1>
      <p>
        I am a Frontend Developer that specializes in using HTML, CSS,
        JavaScript, React and other popular technologies to build beautiful, and
        customer friendly apps.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          Connect With Me
        </div>
        <div className="hero-resume">
          My Resume
        </div>
      </div>
    </div>
  );
};

export default Hero;

import photoGrid from "../images/experiencies-grid.png";

function Hero() {
  return (
    <section className="hero">
      <img className="hero--images" src={photoGrid} alt="" />
      <h1 className="hero--title">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home.
      </p>
    </section>
  );
}

export default Hero;

import "./About.css";

export default function About() {
  return (
    <div id="about" className="aboutvideo">
      <div className="summary">
        <div className="about-paragraph">
          <h1>About</h1>
          <h3>
            Through its intuitive interface, Nutrideem allows food donors to
            easily post surplus food items, whether from households,
            restaurants, or events, and specify their availability.
            Simultaneously, charitable organizations and individuals seeking
            food assistance can browse and request these available donations.
            Nutrideem's advanced matching algorithm ensures that food reaches
            those who need it the most, minimizing waste and maximizing impact.
          </h3>
        </div>
        <img src={require("../assets/grocerypeopletransparent.png")}></img>
      </div>
    </div>
  );
}

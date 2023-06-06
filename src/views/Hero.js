import React from "react";
import heroImage from "../assets/portrait-smiley-woman-holding-bag-with-fruits-vegetables-large.jpg";
import { Button } from "../components/Button";
import "./Hero.css";
import { HashLink } from "react-router-hash-link";

export default function Hero() {
  return (
    <div
      id="hero"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
      }}
      className="hero-container"
    >
      <div className="hero-summary">
        <h2>Rescuing Food, Nourishing Lives</h2>
        <h4>
          At Nutrideem, every meal becomes an opportunity to make a positive
          difference. Join the movement and be part of a sustainable solution to
          food rescue, ensuring that no one goes hungry while reducing
          environmental impact.
        </h4>
        <Button>
          <HashLink className="hashlink" to="/#donate">
            Donate
          </HashLink>
        </Button>
        <Button>
          <HashLink className="hashlink" to="/#order">
            Request
          </HashLink>
        </Button>
      </div>
    </div>
  );
}

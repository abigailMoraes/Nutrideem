import { useState } from "react";
import donate from "../assets/pexels-kampus-production-6682059-1920x1080-25fps.mp4";
import { Button } from "../components/Button";
import DonateModal from "../components/DonateModal";
import "./Donate.css";

export default function Donate() {
  const [donateForm, setDonateForm] = useState(false);
  const viewDonateForm = () => {
    setDonateForm(true);
  };
  return (
    <div id="donate" className="donate">
      <div className="donate-summary">
        <h2>Donate</h2>
        <h4>Consider Monetary Contributions</h4>
        <p>
          Monetary donations provide food banks with the flexibility to allocate
          funds where they are most needed. Food banks have extensive networks
          and purchasing power that allow them to acquire food in bulk or at
          discounted prices and stretch donated dollars further and obtain a
          wider variety of nutritious food options to meet the specific needs of
          their clients. To donate directly please e-transfer funds to
          nutrideem.ca.gmail.com
        </p>
        <Button onClick={viewDonateForm}>Donate Food</Button>
        {donateForm === true && (
          <DonateModal show={donateForm} onClose={() => setDonateForm(false)} />
        )}
      </div>
      <div>
        <video id="donate-video" src={donate} autoPlay loop muted />
      </div>
    </div>
  );
}

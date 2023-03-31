import { useAlertContext } from "../context/alertContext";
import Button from "./Button";

const Hero = () => {
  const {handleClick}=useAlertContext();
  return (
    <section>
      <div className="overlay">
        <div className="stack-vertical" >
          <h1 style={{ color: "var(--primary-color-yellow)" }}>Little Lemon</h1>
          <h6 style={{ color: "var(--secondary-color-white)" }}>Chicago</h6>
          <p style={{ color: "var(--secondary-color-white)" }}>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <div>
            <Button isPrimary onClick={handleClick('reservations')}>Reserve a table</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

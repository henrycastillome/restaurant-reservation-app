import { useAlertContext } from "../context/alertContext";
import Button from "./Button";
import { Slide } from "react-awesome-reveal";

const Hero = () => {
  const {handleClick}=useAlertContext();
  return (
    <section>
      <div className="overlay">
        <div className="stack-vertical" >
          <Slide >
          <h1 style={{ color: "var(--primary-color-yellow)" }}>Little Lemon</h1>
          </Slide>
          <Slide >
          <h6 style={{ color: "var(--secondary-color-white)" }}>Chicago</h6>
          </Slide>
          
          
          <Slide  >
            <p>
           We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
            </p>
            </Slide>
          
          
          
         
          <Slide >
          <div>
            <Button isPrimary onClick={handleClick('reservations')}>Reserve a table</Button>
          </div>
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default Hero;

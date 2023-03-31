import { useAlertContext } from "../context/alertContext";
import Button from "./Button";
import { Slide } from "react-awesome-reveal";

const Hero = () => {
  const {handleClick}=useAlertContext();
  return (
    <section>
      <div className="overlay">
        <div className="stack-vertical" >
          <Slide duration={3000}>
          <h1 style={{ color: "var(--primary-color-yellow)" }}>Little Lemon</h1>
          </Slide>
          <Slide duration={4000}>
          <h6 style={{ color: "var(--secondary-color-white)" }}>Chicago</h6>
          </Slide>
          
          
          <Slide duration={5000} >
            <p>
           We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
            </p>
            </Slide>
          
          
          
         
          <Slide duration={5500}>
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

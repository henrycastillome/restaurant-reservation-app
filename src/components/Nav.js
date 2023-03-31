import React, { useState } from "react";
import logoLittleLemon from "../images/Logo.svg";
import { useAlertContext } from "../context/alertContext";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const logo = [
  {
    alt: "logo little lemmon",
    src: logoLittleLemon,
    id: "logoLittle",
  },
];

const Nav = () => {
  const { handleClick } = useAlertContext();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="nav-bar">
        {logo.map((logos) => (
          <img src={logos.src} alt={logos.alt} key={logos.id} />
        ))}

        <ul>
          <button>Home</button>
          {<button onClick={handleClick("specials")}>Specials</button>}
          {<button onClick={handleClick("reviews")}>Reviews</button>}
          {<button onClick={handleClick("reservations")}>Reservations</button>}
        </ul>
      </nav>

      <nav className="burger">
        <div className="stack-horizontal">
            <button>
          {logo.map((logos) => (
            <img src={logos.src} alt={logos.alt} key={logos.id} />
          ))}
          </button>

          <button onClick={handleToggle}>
            {" "}
            {isOpen ? (
              <FontAwesomeIcon icon={faTimes} size="xl" />
            ) : (
              <FontAwesomeIcon icon={faBars} size="xl" id="icon" />
            )}{" "}
          </button>
        </div>
      
        {isOpen &&
      <div className="stack-vertical">
        <ul>
          {<button >Home</button>}
          {<button onClick={handleClick("specials")}>Specials</button>}
          {<button onClick={handleClick("reviews")}>Reviews</button>}
          {<button onClick={handleClick("reservations")}>Reservations</button>}
        </ul>
      </div> }
      </nav>
    </>
  );
};

export default Nav;

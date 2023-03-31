import React from "react";
import logoLittleLemon from "../images/Logo2.svg";
import { useAlertContext } from "../context/alertContext";
import {
    faInstagram,
    faFacebook,
    faTiktok,
  } from "@fortawesome/free-brands-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  Slide } from "react-awesome-reveal";

const logo = [
  {
    alt: "logo little lemmon",
    src: logoLittleLemon,
    id: "logoLittle",
  },
];

const socials=[
    {
        id:"faInstagram",
        icon:faInstagram,
        url:"www.instagram.com"
    },
    {
        id:'faFacebook',
        icon:faFacebook,
        url:"www.facebook.com"
    },
    {
        id:'faTiktok',
        icon:faTiktok,
        url:'www.tiktok.com'
    }
]

const Footer = () => {
  const { handleClick } = useAlertContext();
  const address = "432 N Clark St, Chicago, IL 60654";
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://www.google.com/maps?q=${encodedAddress}`;
  const phoneNumber = "+13129543087";
  const email = "contact@littlelemmon.com";

  return (
    <footer>
      <div className="stack-horizontal" style={{ paddingTop: "2rem" }}>
        {logo.map((logos) => (
          <img src={logos.src} alt={logos.alt} key={logos.id} />
        ))}
      </div>
      <div className="stack-horizontal" style={{ padding: "0 0" }}>
      <Slide direction="left" cascade duraction={2000}>
        <div className="stack-vertical">
          <h6> Navigation</h6>

          <button>Home</button>
          {<button onClick={handleClick("specials")}>Specials</button>}
          {<button onClick={handleClick("reviews")}>Reviews</button>}
          {<button onClick={handleClick("reservations")}>Reservations</button>}
        </div>
        </Slide>
      <Slide direction="down" cascade duraction={3000}>
        <div className="stack-vertical">
          <h6> Contact</h6>

          <a href={mapUrl} target="_blank" rel="noreferrer">
            432 N Clark St, Chicago, IL 60654
          </a>
          <a href={`tel:${phoneNumber}`} rel="noreferrer">
            call us at 312-954-3087
          </a>
          <a href={`mailto:${email}`}>Contact us</a>
        </div>
        </Slide>
        <Slide direction="right" cascade duraction={4000}>

        <div className="stack-vertical">
          <h6> Social Media</h6>
          <div className="stack-horizontal">
            {socials.map(icons=>(
                <a key={icons.id} href={icons.url} target='_blank' rel="noopener noreferrer" title={icons.url}>
                    <FontAwesomeIcon icon={icons.icon} size='xl' style={{filter:'brightness(80%)'}}/>
                </a>
            ))}
            </div>
            
        </div>
        </Slide>
      </div>
    </footer>
  );
};

export default Footer;

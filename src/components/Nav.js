import React from "react";
import logoLittleLemon from "../images/Logo.svg";


const logo=[
    {
        alt:'logo little lemmon',
        src: logoLittleLemon,
        id:'logoLittle'
    },
];


const Nav=()=>{
    return(
    <nav className='nav-bar'>
        {logo.map((logos)=>(
            <img src={logos.src} alt={logos.alt} key={logos.id} />

        ))}
        
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
    </nav>
        )
}

export default Nav;
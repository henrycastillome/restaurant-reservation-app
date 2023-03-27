import logoLittleLemon from "../images/Logo2.svg";


const logo=[
    {
        alt:'logo little lemmon',
        src: logoLittleLemon,
        id:'logoLittle'
    },
];
const Footer=()=>{
    return (
    <footer>
        <div className="stack-horizontal">
          
            <div className="stack-vertical">
                <h6> Navigation</h6>
                
                    <p>Home</p>
                    <p>About</p>
                    <p>Menu</p>
                    <p>Reservations</p>
                    <p>Order Online</p>
                    <p>Login</p>
                
            </div>
            <div className="stack-vertical">
                <h6> Contact</h6>
                
                    <p>Adress</p>
                    <p>Phone number</p>
                    <p>Email</p>
                    
                
            </div>

            <div className="stack-vertical">
                <h6> Social Media</h6>
                
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Tik Tok</p>
                    
                
            </div>
        </div>
        
    </footer>
    )
}

export default Footer;
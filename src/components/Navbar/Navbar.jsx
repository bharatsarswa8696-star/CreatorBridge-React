import "./Navbar.css";

function Navbar({onLogin}) {

    return (

        <nav className="navbar">


            <div className="logo">

                CREATOR<span>BRIDGE</span>

                <div className="logo-dot"></div>

            </div>


            <div className="nav-links">


                <a 
                href="#"
                className="btn-signin"
                onClick={(e)=>{
                    e.preventDefault();
                    onLogin();
                }}
                >
                    Sign In
                </a>


                <a 
                href="#"
                className="about-link"
                >
                    About Us
                </a>


            </div>


        </nav>

    );

}


export default Navbar;
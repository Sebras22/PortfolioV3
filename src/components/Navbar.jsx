import "./Navbar.css";

function Navbar() {
    return (
        <>
            <section className="Navbar">
                <div className="NomSite">{"</Seb>"}</div>

                <section className="NavbarGauche">
                    <a href="" className="LienNavbar">
                        Accueil
                    </a>
                    <a href="" className="LienNavbar">
                        Skills
                    </a>
                    <a href="" className="LienNavbar">
                        Portfolio
                    </a>
                </section>
                <section className="NavbarDroit">
                    <a href="https://github.com/Sebras22">
                        <img
                            className="ImageRéseau"
                            src="./public/assets/Github.png"
                            alt="Github"
                        />
                    </a>
                    <a href="">
                        <img
                            className="ImageRéseau"
                            src="./public/assets/Linkedin.png"
                            alt="Linkedin"
                        />
                    </a>
                    <a href="">
                        <img
                            className="ImageRéseau"
                            src="./public/assets/Instagram.png"
                            alt="Instagram"
                        />
                    </a>
                </section>
            </section>
        </>
    );
}

export default Navbar;

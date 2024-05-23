import {
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandLinkedin,
} from "@tabler/icons-react";
import "./Navbar.css";

function Navbar() {
    return (
        <>
            <div className="Navbarwrapper">
                <section className="Navbar">
                    <div className="NomSite">{"<Seb>"}</div>

                    <section className="NavbarGauche">
                        <a href="#Home" className="LienNavbar">
                            Home
                        </a>
                        <a href="#Skills" className="LienNavbar">
                            Skills
                        </a>
                        <a href="#ThirdPart" className="LienNavbar">
                            Portfolio
                        </a>
                    </section>
                    <section className="NavbarDroit">
                        <a href="https://github.com/Sebras22">
                            <IconBrandGithub className="ImageRéseau" />
                        </a>
                        <a href="https://www.instagram.com/sebras_22_/">
                            <IconBrandInstagram className="ImageRéseau" />
                        </a>
                        <a href="">
                            <IconBrandLinkedin className="ImageRéseau" />
                        </a>
                    </section>
                </section>
            </div>
        </>
    );
}

export default Navbar;

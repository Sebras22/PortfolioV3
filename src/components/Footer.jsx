import {
    IconBrandDiscord,
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandLinkedin,
} from "@tabler/icons-react";
import "./Footer.css";

function Footer() {
    return (
        <>
            <div className="Footer" id="Footer">
                <div className="Signature">
                    Designed & Developed by{" "}
                    <a href="https://github.com/Sebras22">Seb</a>
                </div>
                <div>Get in touch</div>
                <section className="FooterImg">
                    <div>
                        <a href="https://github.com/Sebras22">
                            <IconBrandGithub className="imgfooter" />
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <IconBrandLinkedin className="imgfooter" />
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <IconBrandInstagram className="imgfooter" />
                        </a>
                    </div>
                    <div className="discordtruc">
                        <a href="">
                            {/* <div className="didi">sebras_</div> */}
                            <IconBrandDiscord className="imgfooterdiscord" />
                        </a>
                    </div>
                </section>
                <div className="Icons8">Copyright 2018-2023 Tabler</div>
            </div>
            <div className="Endbalise">
                <p>{"<Seb />"}</p>
            </div>
        </>
    );
}

export default Footer;

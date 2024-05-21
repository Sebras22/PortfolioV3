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
                        <a href="https://www.linkedin.com/in/sebastien-branly-efrei/">
                            <IconBrandLinkedin className="imgfooter" />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/sebras_22_/">
                            <IconBrandInstagram className="imgfooter" />
                        </a>
                    </div>
                    <div className="discordtruc">
                        <a href="">
                            <IconBrandDiscord className="imgfooterdiscord" />
                        </a>
                    </div>
                </section>
                <div className="Icons8">Copyright 2018-2023 Tabler</div>
                <div className="Icons8">
                    <a href="https://fr.freepik.com/photos-gratuite/quipement-jeu-video-futuriste-illumine-dans-boite-nuit-ai-generative_42214026.htm#fromView=search&page=1&position=17&uuid=020ed910-81d5-44bf-a819-3680a5eb9917">
                        Image d'illustration : vecstock sur Freepik
                    </a>
                </div>
                <div className="Icons9">Icons by Icon8</div>
            </div>
            <div className="Endbalise">
                <p>{"<Seb />"}</p>
            </div>
        </>
    );
}

export default Footer;

import "./Footer.css";

function Footer() {
    return (
        <>
            <div className="Footer">
                <div className="Signature">
                    Designed & Developed by{" "}
                    <a href="https://github.com/Sebras22">Seb</a>
                </div>
                <div>Get in touch</div>
                <section className="FooterImg">
                    <a href="https://github.com/Sebras22">
                        <img
                            className="imgfooter"
                            src="./assets/githubfooter.png"
                            alt="Github"
                        />
                    </a>
                    <a href="">
                        <img
                            className="imgfooter"
                            src="./assets/linkedinfooter.png"
                            alt="Linkedin"
                        />
                    </a>
                    <a href="">
                        <img
                            className="imgfooter"
                            src="./assets/instagramfooter.png"
                            alt="Instagram"
                        />
                    </a>
                    <a href="">
                        <img
                            className="imgfooter"
                            src="./assets/discord.png"
                            alt="Discord"
                        />
                    </a>
                </section>
                <div className="Icons8">
                    Icons by <a href="https://icons8.com/icons">Icons8</a>
                </div>
            </div>
        </>
    );
}

export default Footer;

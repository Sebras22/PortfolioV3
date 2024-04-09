import "./Footer.css";

function Footer() {
    return (
        <>
            <div className="Footer">
                Designed & Developed by{" "}
                <a href="https://github.com/Sebras22">Seb</a>
                <div>Get in touch</div>
                <section className="FooterImg">
                    <a href="https://github.com/Sebras22">
                        <img
                            className=""
                            src="./assets/githubfooter.png"
                            alt="Github"
                        />
                    </a>
                    <a href="">
                        <img
                            className=""
                            src="./assets/linkedinfooter.png"
                            alt="Linkedin"
                        />
                    </a>
                    <a href="">
                        <img
                            className=""
                            src="./assets/instagramfooter.png"
                            alt="Instagram"
                        />
                    </a>
                </section>
            </div>
        </>
    );
}

export default Footer;

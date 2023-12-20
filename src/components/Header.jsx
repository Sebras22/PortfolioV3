import "./Header.css";

function Header() {
    return (
        <>
            <section className="Header">
                <div className="TexteNom">
                    Hi my name is <span className="Nom">Seb !</span>
                </div>
                <div className="TextePrésentation">
                    I’m a french student from Efrei Paris,
                    <span>I’m currently studying in web development.</span>
                </div>
                <button className="BoutonContact" href="">
                    Contact
                </button>
            </section>
        </>
    );
}

export default Header;

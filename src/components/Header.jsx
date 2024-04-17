import "./Header.css";

function Header() {
    return (
        <>
            <section className="Header" id="Accueil">
                <div className="TexteNom">
                    Hi my name is{" "}
                    <div id="flip">
                        <div>
                            <div>Seb</div>
                        </div>
                        <div>
                            <div>Sebras</div>
                        </div>
                        <div>
                            <div>X_Pro_Gamer_X</div>
                        </div>
                    </div>
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

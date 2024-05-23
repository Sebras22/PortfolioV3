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
                    I’m a French student from Efrei Paris,
                    <span>I’m currently studying web development.</span>
                </div>
                <a href="#Footer">
                    <button className="BoutonContact">Contact</button>
                </a>
            </section>
        </>
    );
}

export default Header;

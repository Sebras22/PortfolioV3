import "./FirstPart.css";
import CarteQualités from "./CarteQualités";
import Présentation from "./Présentation.jsx";
import Wave from "./wave.jsx";

function FirstPart() {
    return (
        <>
            <div className="test">
                <Wave />
                <section className="bodyfirstpart">
                    <section>
                        <CarteQualités />
                        <Présentation />
                    </section>
                </section>
                <section className="ImageDéco">
                    <div>
                        <img
                            src="./public/assets/Gamer.jpg"
                            className="Game"
                            alt=""
                        />
                        <div className="VagueSurImage">
                            <div className="VagueBot">
                                <Wave />
                            </div>
                            <div className="VagueTop">
                                <Wave />
                            </div>
                        </div>
                    </div>
                    {/* <div>
                        Image de
                        <a href="https://fr.freepik.com/photos-gratuite/equipement-jeu-video-futuriste-illumine-dans-boite-nuit-ai-generative_42214026.htm#query=gaming&position=1&from_view=search&track=sph&uuid=6e71f791-167a-45af-bfdc-f579c9244d66">
                            vecstock
                        </a>{" "}
                        sur Freepik
                    </div> */}
                </section>
            </div>
        </>
    );
}

export default FirstPart;

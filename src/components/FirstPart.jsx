import "./FirstPart.css";
import CarteQualités from "./CarteQualités";
import Présentation from "./Présentation.jsx";
import Wave from "./wave.jsx";

function FirstPart() {
    return (
        <>
            <div>
                <Wave />
                <section className="bodyfirstpart">
                    <section>
                        <CarteQualités />
                        <Présentation />
                    </section>
                </section>
                <section className="ImageDéco">
                    <div>
                        <div className="VagueSurImage">
                            <div className="VagueBot">
                                <Wave />
                            </div>
                            <div className="VagueTop">
                                <Wave />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default FirstPart;

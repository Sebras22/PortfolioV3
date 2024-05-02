import "./Présentation.css";
import { Pres } from "../Table/Array.js";
import { IconUser } from "@tabler/icons-react";

function Présentation() {
    return (
        <>
            <section className="Présentation" id="Presentation">
                <img className="blob" src="./public/assets/blob.png" alt="" />

                <div className="Pres">
                    {Pres.map((el, id) => {
                        return (
                            <>
                                <section className="PresArrangement">
                                    <div>{<el.src className="IconPres" />}</div>
                                    <section className="ZoneText" key={id}>
                                        <div>
                                            <div className="PresTitre">
                                                {el.title}
                                            </div>
                                            <div className="PresText">
                                                {el.text}
                                            </div>
                                        </div>
                                    </section>
                                </section>
                            </>
                        );
                    })}
                </div>
            </section>
        </>
    );
}

export default Présentation;

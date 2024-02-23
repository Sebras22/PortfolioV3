import "./ThirdPart.css";
import { Projects } from "../Table/Array.js";
import Wave from "./wave.jsx";
import Modal from "./modal.jsx";
import { useState } from "react";

function ThirdPart() {
    // Un state
    const [isOpen, setIsOpen] = useState(false);
    // Une fonction pour ouvrir le modal
    const open = () => setIsOpen(true);
    // Une fonction pour fermer le modal
    const close = () => setIsOpen(false);
    return (
        <>
            <section className="ThirdPart">
                <div className="TitreThirdPart">
                    My web Developments projects & my designs
                </div>
                <section className="ArrangementProjects">
                    <section className="Projects">
                        {Projects.map((el, id) => {
                            return (
                                <>
                                    <section key={id} className="CardProjects">
                                        <img
                                            className="imgProject"
                                            src={el.img}
                                            alt=""
                                        />
                                        <section className="InfoProjects">
                                            <div className="TitreProjects">
                                                {el.titre}
                                            </div>
                                            <div>{el.text}</div>
                                            <div>
                                                {el.tools.map((el, id) => {
                                                    return (
                                                        <>
                                                            <div key={id}>
                                                                <img
                                                                    src={el.src}
                                                                    alt=""
                                                                />
                                                                <button
                                                                    onClick={
                                                                        open
                                                                    }
                                                                >
                                                                    Modal
                                                                </button>
                                                            </div>
                                                        </>
                                                    );
                                                })}
                                            </div>
                                            <div></div>
                                        </section>
                                    </section>
                                </>
                            );
                        })}
                    </section>
                    <Modal
                        isOpen={isOpen}
                        close={close}
                        titre={Projects.modal?.titre}
                        text={Projects.modal?.text}
                    />
                </section>
            </section>
            <div className="VagueBot">
                <Wave />
            </div>
        </>
    );
}

export default ThirdPart;

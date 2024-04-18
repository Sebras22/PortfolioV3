import "./ThirdPart.css";
import { Projects } from "../Table/Array.js";
import Wave from "./wave.jsx";
import Modal from "./Modal.jsx";
import { useState } from "react";

function ThirdPart() {
    // Un state pour suivre l'état d'ouverture de chaque modal
    const [isOpen, setIsOpen] = useState({});

    // Une fonction pour ouvrir le modal spécifié par l'ID
    const openModal = (id) => {
        setIsOpen((prevState) => ({
            ...prevState,
            [id]: true,
        }));
    };

    // Une fonction pour fermer le modal spécifié par l'ID
    const closeModal = (id) => {
        setIsOpen((prevState) => ({
            ...prevState,
            [id]: false,
        }));
    };

    return (
        <>
            <section className="ThirdPart" id="ThirdPart">
                <div className="ArrThird">
                    <div className="TitreThirdPart">
                        My web Developments projects & my designs
                    </div>
                    <section className="ArrangementProjects">
                        <section className="Projects">
                            {Projects.map((el, id) => {
                                return (
                                    <section key={id}>
                                        <section className="CardProjects">
                                            <img
                                                className="imgProject"
                                                src={el.img}
                                                alt=""
                                            />
                                            <section className="InfoProjects">
                                                <div className="TitreProjects">
                                                    {el.titre}
                                                </div>
                                                <div className="projectdesc">
                                                    {el.text}
                                                </div>
                                                <div>
                                                    {el.tools.map(
                                                        (tool, index) => (
                                                            <div key={index}>
                                                                <img
                                                                    className="toolinfo"
                                                                    src={
                                                                        tool.src
                                                                    }
                                                                    alt=""
                                                                />
                                                                <button
                                                                    className="BoutonModal"
                                                                    onClick={() =>
                                                                        openModal(
                                                                            id
                                                                        )
                                                                    }
                                                                >
                                                                    Modal
                                                                </button>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                                <div></div>
                                            </section>
                                        </section>
                                        {/* Afficher le modal correspondant si ouvert */}
                                        {isOpen[id] && (
                                            <Modal
                                                isOpen={isOpen[id]}
                                                close={() => closeModal(id)}
                                                titre={el.modal?.titreModal}
                                                text={el.modal?.textModal}
                                                image={el.modal?.imgModal}
                                            />
                                        )}
                                    </section>
                                );
                            })}
                        </section>
                    </section>
                </div>
            </section>
            <div className="VagueBot">
                <Wave />
            </div>
        </>
    );
}

export default ThirdPart;

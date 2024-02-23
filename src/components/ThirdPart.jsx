import "./ThirdPart.css";
import { Projects } from "../Table/Array.js";
import Wave from "./wave.jsx";
import Modal from "./modal.jsx";

function ThirdPart() {
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
                                                            </div>
                                                        </>
                                                    );
                                                })}
                                            </div>
                                            {/* <div>
                                                {el.modal.map((el, id) => {
                                                    return (
                                                        <>
                                                            <Modal
                                                                Titre={Titre}
                                                                text={text}
                                                            />
                                                        </>
                                                    );
                                                })}
                                            </div> */}
                                            {/* <div>{el.tools}</div> */}
                                        </section>
                                    </section>
                                </>
                            );
                        })}
                    </section>
                </section>
            </section>
            <div className="VagueBot">
                <Wave />
            </div>
        </>
    );
}

export default ThirdPart;

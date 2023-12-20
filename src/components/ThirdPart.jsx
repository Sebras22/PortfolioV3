import "./ThirdPart.css";
import { Projects } from "../Table/Array.js";

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
                                            {/* <div>{el.tools}</div> */}
                                        </section>
                                    </section>
                                </>
                            );
                        })}
                    </section>
                </section>
            </section>
        </>
    );
}

export default ThirdPart;

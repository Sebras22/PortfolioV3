import "./Présentation.css";
import { Pres } from "../Table/Array.js";

function Présentation() {
    return (
        <>
            <section className="Présentation">
                <img className="blob" src="./public/assets/blob.png" alt="" />

                <div className="Pres">
                    {Pres.map((el, id) => {
                        return (
                            <>
                                <section className="PresArrangement" key={id}>
                                    <div>
                                        <img
                                            className="IconePres"
                                            src={el.src}
                                            alt=""
                                        />
                                    </div>
                                    <section className="ZoneText">
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

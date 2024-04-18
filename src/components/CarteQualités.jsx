import "./CarteQualités.css";
import { Card } from "../Table/Array.js";

function CarteQualités() {
    return (
        <>
            <div className="PlacementCards">
                <div className="Carrousel">
                    {Card.map((el, id) => {
                        return (
                            <section className="Allcarte" id={el.id} key={id}>
                                <div className="IcôneQualités">
                                    {<el.src className="Icone" />}
                                </div>
                                <section className="Carte">
                                    <div className="Qualité">{el.name}</div>
                                    <div className="Description">{el.text}</div>
                                </section>
                            </section>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default CarteQualités;

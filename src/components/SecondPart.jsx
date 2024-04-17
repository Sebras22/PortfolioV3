import "./SecondPart.css";
import { Skills } from "../Table/Array.js";

function SecondPart() {
    return (
        <>
            <section className="Skill" id="Skills">
                <div className="TitreSkill">My Skills</div>
                <div className="SkillsPlacement">
                    {Skills.map((el, id) => {
                        return (
                            <>
                                <section className="Test" key={id}>
                                    <div className="CardSkills">
                                        <div className="SkillTitle">
                                            {el.Title}
                                        </div>
                                        {el.truc.map((el, id) => {
                                            return (
                                                <>
                                                    <section
                                                        className="IconeSection"
                                                        key={id}
                                                    >
                                                        <div className="IconDiv">
                                                            <div className="NomIcone">
                                                                {el.text}
                                                            </div>
                                                            <img
                                                                className="IconesSkills"
                                                                src={el.src}
                                                            />
                                                        </div>
                                                    </section>
                                                </>
                                            );
                                        })}
                                        <div className="LogoSkill">
                                            {<el.Icone className="ImgSkill" />}
                                        </div>
                                    </div>
                                </section>
                            </>
                        );
                    })}
                </div>
            </section>
        </>
    );
}

export default SecondPart;

import { useState } from "react";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./ContactForm.css";
function ContactForm() {
    const [state, handleSubmit] = useForm("xqkrqndo");

    return (
        <>
            <div className="TitreContact">Contact Form</div>
            {state.succeeded ? (
                <div className="MSGdiv">
                    <p className="MSG">
                        Votre message a bien été{" "}
                        <span className="spanMSG"> envoyé </span> !
                    </p>
                    <div className="loader"></div>
                </div>
            ) : (
                <div className="GlobalForm">
                    <form onSubmit={handleSubmit}>
                        <div className="Form">
                            <div className="Inputhaut">
                                <div>
                                    <div className="InputTitle">Email</div>
                                    <input
                                        className="mail"
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="exemple@email.com"
                                        required
                                    />
                                    <ValidationError
                                        prefix="Email"
                                        field="email"
                                        errors={state.errors}
                                    />
                                </div>
                                <div>
                                    <div className="InputTitle">Sujet</div>
                                    <input
                                        className="subject"
                                        name="subject"
                                        placeholder="Le sujet de votre message"
                                        required
                                    />
                                </div>
                                <div>
                                    <div className="InputTitle">Téléphone</div>
                                    <input
                                        className="phone"
                                        name="phone"
                                        placeholder="06 12 34 56 78"
                                    />
                                </div>
                            </div>
                            <div className="Inputbas">
                                <div className="InputTitle">Votre message</div>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Écrivez ici votre message"
                                    required
                                />
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                            </div>
                        </div>
                        <div className="Submit">
                            <button
                                className="submit"
                                type="submit"
                                disabled={state.submitting}
                            >
                                {state.submitting
                                    ? "Envoi en cours..."
                                    : "Envoyer"}
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}

export default ContactForm;

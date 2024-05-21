import React, { useState } from "react";
import "./Modal.css"; // Importez votre fichier CSS pour styliser le modal
import Carrousel from "./Carrousel";
import { Projects } from "../Table/Array.js";

const Modal = ({ isOpen, close, titre, text, image, techno }) => {
    return (
        <>
            {/* <button onClick={open}>OPEN</button> */}
            <div className={`modalContainer ${isOpen ? "active" : "inactive"}`}>
                <div className="modal">
                    <Carrousel image={image} />

                    <>
                        <div className="ModalInfo">
                            <div className="ModalDescription">
                                <h3>{titre}</h3>
                                <p>{text}</p>
                            </div>
                        </div>
                        <div className="Techno">
                            <img src={techno} className="technoimage" alt="" />
                        </div>
                    </>
                </div>
                <div className="clickoutside" onClick={close} />
            </div>
        </>
    );
};

export default Modal;

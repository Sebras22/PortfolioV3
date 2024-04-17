import React, { useState } from "react";
import "./Modal.css"; // Importez votre fichier CSS pour styliser le modal
import Carrousel from "./Carrousel";
import { Projects } from "../Table/Array.js";

const Modal = ({ isOpen, close, titre, text }) => {
    const images = [
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
        "https://t3.ftcdn.net/jpg/06/36/66/82/360_F_636668247_DFnN5PoYd6TggxOc8blhQks4eFGjhdoB.jpg",
        "https://t3.ftcdn.net/jpg/06/59/78/28/360_F_659782827_94nzk28rXxw3R1OGyLVWo6f627kYMhkb.jpg",
        // Ajoutez autant d'images que vous le souhaitez
    ];

    return (
        <>
            {/* <button onClick={open}>OPEN</button> */}
            <div className={`modalContainer ${isOpen ? "active" : "inactive"}`}>
                <div className="modal">
                    <Carrousel images={images} />

                    <>
                        <div className="ModalInfo">
                            <div className="ModalDescription">
                                <h3>{titre}</h3>
                                <p>{text}</p>
                            </div>
                        </div>
                        <div className="Techno">
                            <img
                                src="./public/assets/React.png"
                                className="technoimage"
                                alt=""
                            />
                        </div>
                    </>
                </div>
                <div className="clickoutside" onClick={close} />
            </div>
        </>
    );
};

export default Modal;

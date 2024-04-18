import React, { useState } from "react";
import "./Carrousel.css";

const Carrousel = ({ image }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? image.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === image.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="carousel">
            <button className="arrow" onClick={goToPrevious}>
                <img
                    className="controleur"
                    src="./public/assets/Arrow2.png"
                    alt=""
                />
            </button>
            <img
                className="image"
                src={image[currentImageIndex]}
                alt={`Image ${currentImageIndex}`}
            />
            <button className="arrow" onClick={goToNext}>
                <img
                    className="controleur"
                    src="./public/assets/Arrow.png"
                    alt=""
                />
            </button>
        </div>
    );
};

export default Carrousel;
